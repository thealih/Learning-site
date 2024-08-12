import React, { useContext } from "react";
import AuthContext from "../../../context/authContext";
import IndexBox from "../../../Components/UserPanel/IndexBox/IndexBox";

export default function Index() {
  const authContext = useContext(AuthContext);

  return (
    <div class="">
      <div class="main">
        <div class="main__title">
          <span class="main__title-text">
            سلام{" "}
            <span class="main__title-name">{authContext.userInfos.name}</span>،
            به پنل کاربری خوش اومدی
          </span>
        </div>
        <p class="main__desc text-justify">
          از طریق پیشخوان حساب کاربری‌تان، می‌توانید سفارش‌های اخیرتان را
          مشاهده، آدرس‌های حمل و نقل و صورتحساب‌تان را مدیریت و جزییات حساب
          کاربری و کلمه عبور خود را ویرایش کنید.
        </p>
        <div class="main__links">
          <div class="md:grid grid-cols-2 gap-5">
            <IndexBox title="سفارش" href="orders" />
            <IndexBox title="دوره های خریداری شده" href="courses" />
            <IndexBox title="کیف پول من" href="money" />
            <IndexBox title="جزئیات حساب کاربری" href="infos" />
            <IndexBox title="تیکت های پشتیبانی" href="ticket" />
          </div>
        </div>
      </div>
    </div>
  );
}
