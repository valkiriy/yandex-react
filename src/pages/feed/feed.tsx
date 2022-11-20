import React from 'react';
import styles from "./feed.module.css";
import {OrderSmall} from "../../components/order-small/order-small";
import {OrderStatus, TOrder} from "../../utils/types";
import {Link, useLocation} from "react-router-dom";

interface IFeed {
    listOrders: TOrder[],
    cntAll: number,
    cntToday: number
}

function Feed({listOrders, cntAll, cntToday}: IFeed){

    let location = useLocation();

    return (
        <div className={`${styles.container}`}>
            <h1 className={"pt-10 pb-5 text text_type_main-large"}>Лента заказов</h1>
            <main className={`${styles.main}`}>
                <div>
                    <div className={styles.list_wrap}>
                        {listOrders.map((order) => (
                            <Link key={order._id}
                                to={{
                                    pathname: `/feed/${order._id}`,
                                    state: {
                                        background_feed: location,
                                    }
                                }}
                                  className={styles.link}
                            >
                                <OrderSmall  order={order} />
                            </Link>
                        ))}
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.grid_stats}>
                        <div>
                            <div className="text text_type_main-medium mb-4">Готовы:</div>
                            {listOrders.filter(order => order.status === OrderStatus.DONE).slice(0, 5).map(order => (
                                <div key={order.number} className={`text text_type_digits-default mb-1`}>{order.number}</div>
                            ))}
                        </div>
                        <div>
                            <div className="text text_type_main-medium">В работе:</div>
                            {listOrders.filter(order => order.status === OrderStatus.CREATED).map(order => (
                                <div key={order.number}  className={`text text_type_digits-default mb-1`}>{order.number}</div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="text text_type_main-medium">Выполнено за все время:</div>
                        <div className="text text_type_digits-large">{cntAll}</div>
                    </div>
                    <div>
                        <div className="text text_type_main-medium">Выполнено за сегодня:</div>
                        <div className="text text_type_digits-large">{cntToday}</div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Feed;