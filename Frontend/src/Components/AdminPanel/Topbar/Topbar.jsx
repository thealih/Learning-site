import { useEffect, useState } from "react";

const Topbar = () => {
  const [adminInfo, setAdminInfo] = useState([]);
  const [adminNotification, setAdminNotification] = useState([]);
  const [isShowNotificationBox, setIsShowNotificationBox] = useState(false);

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    fetch(`http://localhost:4000/v1/auth/me`, {
      headers: {
        Authorization: `Bearer ${localStorageData.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAdminInfo(data);
        setAdminNotification(data.courses);
      });
  }, [seeNotification]);
  function seeNotification(notificationID) {
    fetch(`http:localhost:4000/v1/notifications/see/${notificationID}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorageData.token}`,
      },
    }).then((res) => res.json());
  }
  return (
    <div className="container-fluid">
      <div className="container">
        <div
          className={`home-header ${
            isShowNotificationBox && "active-modal-notfication"
          }`}
        >
          <div className="home-right">
            <div className="home-searchbar">
              <input
                type="text"
                className="search-bar"
                placeholder="جستجو..."
              />
            </div>
            <div className="home-notification">
              <button
                type="button"
                onMouseEnter={() => setIsShowNotificationBox(true)}
              >
                <i className="far fa-bell"></i>
              </button>
            </div>
            <div
              className="home-notification-modal"
              onMouseEnter={() => setIsShowNotificationBox(true)}
              onMouseLeave={() => setIsShowNotificationBox(false)}
            >
              <ul className="home-notification-modal-list">
                {adminNotification.length === 0 ? (
                  <li className="home-notification-modal-item">
                    اعلانی برای نمایش وجود ندارد
                  </li>
                ) : (
                  <>
                    {adminNotification.map((notification) => (
                      <li className="home-notification-modal-item">
                        <span className="home-notification-modal-text">
                          {notification}
                        </span>
                        <label className="switch">
                          <a
                            href="javascript:void(0)"
                            onClick={() => {
                              seeNotification(notification._id);
                            }}
                          >
                            دیدم
                          </a>
                        </label>
                      </li>
                    ))}
                  </>
                )}
              </ul>
            </div>
          </div>
          <div className="home-left">
            <div className="home-profile">
              <div className="home-profile-image">
                <a href="#">
                  <img src={adminInfo.profile} alt="" />
                </a>
              </div>
              <div className="home-profile-name">
                <a href="#">{adminInfo.name}</a>
              </div>
              <div className="home-profile-icon">
                <i className="fas fa-angle-down"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
