import React from "react";
import "./styles.css";
import Background from "./images/background.png"
import Card1 from "./images/card1.png";
import Card2 from "./images/card3.png";
import Card3 from "./images/card2.png";
class Page extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className={"container"}>
                <header>
                    <HeaderFooter name={"header__title title"}/>
                </header>
                <main className={"main"}>
                    <Hero background={Background}/>
                    <Cards/>
                    <Subscription/>
                </main>
                <footer>
                    <HeaderFooter name={"footer__title title"}/>
                </footer>
            </div>
        )
    }
}
function HeaderFooter(props){
    return(
        <div className={props.name}>
            <h1>Новости культуры</h1>
            <ul className={"title__ul ul"}>
                <li><a href={""}>Новости</a></li>
                <li><a href={""}>Обзоры</a></li>
                <li><a href={""}>Музыка</a></li>
                <li><a href={""}>Архитектура</a></li>
                <li><a href={""}>Кино</a></li>
                <li><a href={""}>Театр</a></li>
                <li><a href={""}>Литература</a></li>
                <li><a href={""}>Религия</a></li>
                <li><a href={""}>Живопись</a></li>
            </ul>
        </div>
    )
}
function Hero(props){
    return(
        <div className={"main__hero hero"} style={{backgroundImage:`url(${props.background})`}}>
            <h1>
                Подводный отель
            </h1>
            <p>
                Как известно, Дубай – город контрастов. Самые революционные
                и фантастические мечты архитекторов способен воплотить в жизнь этот мегаполис, построенный на нефти и за счет нефти
            </p>
        </div>
    )
}
function Cards(props){
    return(
        <div className={"main__cards cards"}>
            <h1>Обзоры</h1>
            <ul className={"cards__ul ul"}>
                <li className={"ul__li li"}>
                    <Card name={"«Шальные годы» Монпарнаса"}
                          value={"В Музее изобразительных искусств имени Пушкина с 29 сентября" +
                          " по 29 ноября проходит выставка «Шальные годы Монпарнаса»"}
                          src={Card1}
                    />
                </li>
                <li className={"ul__li li"}>
                    <Card name={"Анатомия за 30 секунд"}
                          value={"Сейчас, когда мир открыт нараспашку для человека " +
                          "и его познавательных изысканий, интерес " +
                          "к научно‑популярной литературе заметно вырос"}
                          src={Card2}
                          orange={true}
                    />
                </li>
                <li className={"ul__li li"}>
                    <Card name={"Сферические чудаки"}
                          value={"Корреспондентам «Культурного обозревателя» посчастливилось побывать в театре «Сфера»" +
                          " на премьере спектакля «Чудаки и зануды» "}
                          src={Card3}
                    />
                </li>
            </ul>
        </div>
    )
}
function Card(props){
    let orange = ""
    if(props.orange){
        orange = "orange"
    }
    return(
        <div className={"li__card card"}>
            <img src={props.src}/>
            <h1 className={orange}>{props.name}</h1>
            <p>{props.value}</p>
        </div>
    )
}
function Subscription(props){
    return(
        <div className={"main__subscription subscription"}>
            <div className={"subscription__center center"}>
                <h1>АБОНЕМЕНТЫ В ТЕАТР</h1>
                <ul className="subscription__ul ul">
                    <li className="ul__li li item1">
                        <h2>Скидка 50% на весь сезон 2020</h2>
                        <p>Покупая абонемент на сезон 2020 года вы сэкономите половину стоимости всех спектаклей</p>
                    </li>
                    <li className="ul__li li item2">
                        <h2>Места у сцены</h2>
                        <p>Только для обладателей абонементов будет возможность сесть поближе к сцене</p>
                    </li>
                    <li className="ul__li li item3">
                        <h2>Автограф-сессия актёров</h2>
                        <p>После спектаклей у вас будет возможность пообщаться с актёрами и взять у них автограф</p>
                    </li>
                </ul>
                <button>Смотреть -></button>
            </div>
        </div>
    )
}

export default Page