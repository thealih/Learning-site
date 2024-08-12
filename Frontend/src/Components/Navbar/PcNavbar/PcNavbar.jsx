import { useContext } from "react";

const PcNavbar = (authContext, allMenus) => {
  console.log(allMenus);

  return (
    <div className="container-fluid">
      <div className="main-header__content hidden">
        <div className="main-header__right">
          <img
            src="/images/logo/Logo.png"
            className="main-header__logo"
            alt="لوگوی ایران لرن"
          />

          <ul className="main-header__menu">
            <li className="main-header__item">
              <Link to="/" className="main-header__link">
                صفحه اصلی
              </Link>
            </li>

            {Object.values(allMenus).map((menu) => (
              <li className="main-header__item">
                <Link
                  to={`${menu.href}/1`}
                  className="main-header__link"
                  key={1}
                >
                  {menu.title}
                  {menu.submenus.length !== 0 && (
                    <>
                      <i className="fas fa-angle-down main-header__link-icon"></i>
                      <ul className="main-header__dropdown">
                        {menu.submenus.map((submenus) => (
                          <li className="main-header__dropdown-item">
                            <Link
                              to={submenus.href}
                              className="main-header__dropdown-link"
                            >
                              {submenus.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="main-header__left">
          <a href="#" className="main-header__search-btn">
            <i className="fas fa-search main-header__search-icon"></i>
          </a>
          <a href="#" className="main-header__cart-btn">
            <i className="fas fa-shopping-cart main-header__cart-icon"></i>
          </a>
          {authContext.isLoggedIn ? (
            <Link to="/login" className="main-header__profile">
              <span className="main-header__profile-text">
                {authContext.userInfos.name}
              </span>
            </Link>
          ) : (
            <Link to="/login" className="main-header__profile">
              <span className="main-header__profile-text">ورود / ثبت نام</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default PcNavbar;
