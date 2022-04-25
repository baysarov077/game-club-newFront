import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  createNick,
  getUsersById,
  handleImage,
} from "../../redux/reducers/application";
import Footer from "../Footer";
import Header from "../Header";
import "./Profile.style.css";
import gamePhoto from "../img/gamePhoto.jpg";

const PersonalArea = () => {
  const { id } = useParams();

  const users = useSelector((state) => state.applicationReducer.users);
  const load = useSelector((state) => state.applicationReducer.loader);

  const dispatch = useDispatch();
  const [nickName, setNickName] = useState("");
  const [file, setFile] = useState("");

  useEffect(() => {
    dispatch(getUsersById(id));
  }, [dispatch]);

  const handleClick = () => {
    dispatch(handleImage(users._id, file));
  };
  const handleNickName = () => {
    dispatch(createNick(nickName, users._id));
  };
  const handleChange = (e) => {
    setNickName(e.target.value);
  };
  const avat =
    "https://c0.klipartz.com/pngpicture/684/352/gratis-png-un-golpe-hombre-saitama-anime-superheroe-un-golpe.png";

  return (
    <div>
      <Header />
      {load ? (
        <div className="spin-wrapper">
          <div className="spinner">loading</div>
        </div>
      ) : (
        <div className="deni__login">
          <div className="login_img">
            <img src={gamePhoto} alt="Photo" />
          </div>
          <div className="deni__login_2">
            <div className="deni__sign">
              <span className="login__text">SIGN IN</span>
              <div className="login__password_inputs">
                <input type="text" className="input__text_login" placeholder="Введите логин"/>
                <input type="password" className="input__text_password" placeholder="Введите пароль"/>
                <button className="login__btn"> ВОЙТИ </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default PersonalArea;
/*<div className={styles.file__wrapper}>
<div className={styles.img}>
  <div className={styles.input__file}>
    <div>
      <div>
        <label htmlFor="upload_photo">
          <img
            className={styles.image__profile}
            src={
              users.image
                ? `http://localhost:6006/${users.image}`
                : avat
            }
          />
          <input onChange={handleChange} value={nickName} />
          <button onClick={handleNickName}>жми шейкер</button>
          <input
            id="upload_photo"
            className={styles.file}
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </label>
      </div>

      <div className={styles.container}>
        <button
          className={styles.animated__word}
          onClick={handleClick}
        >
          GAME
        </button>
      </div>
      <p>Ваш ник: {users.nickName}</p>
      <p>Ваш баланс: {users.amount}</p>
    </div>
  </div>
</div>
<div className={styles.glitch}></div>
</div>*/
