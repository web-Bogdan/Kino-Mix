import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import '../styles/AboutUs.scss';

const AboutUs = () => {
    return (
        <div className="about">
            <h2 className="about__title title">Про нас <FontAwesomeIcon className="About__icon-heart" icon={faHeart}/></h2>
                <ul className="about__advantages">
                    <li className="about__advantage">🔥 У нас можно смотреть кино (и сериалы);</li>
                    <li className="about__advantage">🔥🔥 У нас можно купить билеты в кино;</li>
                    <li className="about__advantage">🔥🔥🔥 У нас можно читать про кино;</li>
                    <li className="about__advantage">🔥🔥🔥🔥 У нас можно обсуждать кино;</li>
                    <li className="about__advantage">🔥🔥🔥🔥🔥 У нас можно оценить кино</li>
                </ul>
            <div className="about__description">
                <p>
                    Сначала у нас появляется слух о новом фильме или сериале, потом он превращается в новость, мы показываем вам постер,
                    тизер, трейлер, вы нажимаете «буду смотреть», чтобы не пропустить фильм.
                </p>
                <p>Потом вы читаете нашу рецензию, покупаете у нас билеты, ставите фильму оценку, пишете отзыв, потом еще раз пересматриваете
                    фильм, когда он появляется у нас онлайн. Фильм уходит в архив, а мы с вами ждем новый фильм или сериал.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
