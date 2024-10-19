import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { VscClose } from "react-icons/vsc";

const SlideInNotifications = ({ notification, triggered }) => {
  const [notifications, setNotifications] = useState([]);

 
  useEffect(() => {
    notification?.id && setNotifications((prevNotifications) => [notification, ...prevNotifications])
  }, [notification])
  

  const removeNotif = (id) => {
    setNotifications((prevNotifications) => prevNotifications.filter((notification) => notification.id !== id));
  };

  return (
    <div className="slide_notify_container_bg">
      
      {
        triggered &&
        <div className="slide_notify_container">
          <AnimatePresence>
            { notifications.map((note) => (
              <Notification removeNotif={removeNotif} status={notification?.status || "ok"} id={note.id || Math.random() } key={ note?.id } text={note.text}/>
            ))}
          </AnimatePresence>
        </div>
      }
    </div>
  );
};



const NOTIFICATION_TTL = 5000;
const Notification = ({ text, id, removeNotif, status }) => {
  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      removeNotif(id);
    }, NOTIFICATION_TTL);

    return () => clearTimeout(timeoutRef);
  }, []);

  return (
    <motion.div
      layout
      initial={{ y: -15, scale: 0.95 }}
      animate={{ y: 0, scale: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`slide_notification ${status}`}
    >
      <span>{text}</span>
      <span className="slide_notification_status_icon">
        <VscClose />
      </span>
    </motion.div>
  );
};



export default SlideInNotifications;

