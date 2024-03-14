import React from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

class Notification extends React.Component {
  render() {
    return (
      <div>
        <NotificationContainer />
      </div>
    );
  }
}

// Hàm notify để gọi thông báo từ bên ngoài
export const notify = (type, message, title, duration, callback) => {
  switch (type) {
    case "info":
      NotificationManager.info(message);
      break;
    case "success":
      NotificationManager.success(message, title, duration, callback);
      break;
    case "warning":
      NotificationManager.warning(message, title, duration, callback);
      break;
    case "error":
      NotificationManager.error(message, title, duration, callback);
      break;
    default:
      break;
  }
};

export default Notification;
