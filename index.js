const Notification = (props) => {
  const { url } = props;
  const { text } = props;
  const {container-color} = props;
  return (<div className={container-color}>
    <img src={url} className="icon" />
    <p className="text-style">{text}</p>
  </div>);
};

const element = 
     (<div className = "bg-container">
        <h1 className = "heading">Notifications</h1>
        <div className = "top-container">
            <Notification container-color = "container blue"
                url = "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
                text = "Information Message"
            />
            
            <Notification container-color = "container green"
                url = "https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                text = "Success Message"
            />
            <Notification container-color = "container yellow"
                url = "https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
                text = "Warning Message"
            />
            <Notification container-color = "container red"
                url = "https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
                text = "Error Message"
            />

        </div>
    </div>)
;

ReactDOM.render(element, document.getElementById("root"));
