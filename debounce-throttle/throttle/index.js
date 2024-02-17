function throttle(func, delay) {
    // Biến lưu thời điểm cuối cùng hàm được thực hiện
    let lastExecTime = 0;

    // Biến lưu id của timeout
    let timeoutId;

    return function (...args) {
        // Lấy ra ngữ cảnh (context) và thời điểm hiện tại
        const context = this;
        const currentTime = Date.now();

        // So sánh thời điểm hiện tại với thời điểm cuối cùng hàm được thực hiện
        if (currentTime - lastExecTime >= delay) {
            // Nếu đã đủ thời gian giữa hai lần thực hiện hàm, thực hiện ngay lập tức
            clearTimeout(timeoutId);
            func.apply(context, args);
            lastExecTime = currentTime;
        } else {
            // Nếu chưa đủ thời gian giữa hai lần thực hiện hàm
            clearTimeout(timeoutId);

            // Đặt một timeout để thực hiện hàm sau một khoảng thời gian delay
            timeoutId = setTimeout(() => {
                func.apply(context, args);
                lastExecTime = currentTime;
            }, delay);
        }
    };
}
