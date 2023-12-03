const fakeData = [
    { label: 'ACB', data: 7, status: true, color: 'rgba(255, 99, 132, 1)' },
    { label: 'BIDV', data: 9, status: true, color: 'rgba(54, 162, 235, 1)' },
    { label: 'SuccessCheckbox', data: 3, status: true, color: 'rgba(255, 206, 86, 1)' },
    { label: 'Sacombank', data: 19, status: true, color: 'rgba(75, 192, 192, 1)' },
    { label: 'Techcombank', data: 10, status: true, color: 'rgba(153, 102, 255, 1)' },
    { label: 'Vietinbank', data: 12, status: true, color: 'rgba(255, 159, 64, 1)' }
]

const [dataSelector, setDataSelector] = useState < FakeData[] > (fakeData)
useEffect(() => {
    for (let i = 0; i < fakeData.length; i++) {
        const color = fakeData[i].color;
        const cssRule = `
		    .checkbox-${i} {
		      .ant-checkbox-checked {
		        .ant-checkbox-inner {
		          background-color: ${color};
		          border-color: ${color};
		        }
		      }
		    }
		    .checkbox-${i}:hover {
		      .ant-checkbox-inner {
		        background-color: ${color};
		      }
		    }
		  `;

        const styleElement = document.createElement('style');
        styleElement.type = 'text/css';
        styleElement.appendChild(document.createTextNode(cssRule));
        document.head.appendChild(styleElement);

        // cach  khac:
        /*const styleElement = document.createElement('style');
  styleElement.type = 'text/css';
  styleElement.innerText= cssRule  ;
  document.head.appendChild(styleElement);*/
    }
}, []);
return (
    {
        fakeData.map((item, index) => (
            <Checkbox
                className={`checkbox-${index}`} // Thêm class name động cho Checkbox
                onChange={handleSelectBank}
                defaultChecked
                key={index}
                value={item}>{item.label}
            </Checkbox>
        ))
    }
)