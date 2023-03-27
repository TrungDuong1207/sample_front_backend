import { useState, useEffect } from "react";

function App() {
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);

  useEffect(() => {
    // Lấy access token và refresh token từ server
    fetch("/api/authenticate", {
      method: "POST",
      body: JSON.stringify({ username: "username", password: "password" }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setAccessToken(data.accessToken);
        setRefreshToken(data.refreshToken);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleLogout = () => {
    // Gửi yêu cầu đăng xuất với access token hiện tại
    fetch("/api/logout", {
      method: "POST",
      headers: { Authorization: `Bearer ${accessToken}` },
    })
      .then(() => {
        // Xóa access token và refresh token khỏi state
        setAccessToken(null);
        setRefreshToken(null);
      })
      .catch((error) => console.log(error));
  };

  const handleRefreshToken = () => {
    // Yêu cầu một access token mới với refresh token hiện tại
    fetch("/api/refresh-token", {
      method: "POST",
      headers: { Authorization: `Bearer ${refreshToken}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setAccessToken(data.accessToken);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {accessToken ? (
        <div>
          <p>You are logged in!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>You need to log in!</p>
        </div>
      )}
      {refreshToken && (
        <div>
          <button onClick={handleRefreshToken}>Refresh Token</button>
        </div>
      )}
    </div>
  );
}

export default App;
