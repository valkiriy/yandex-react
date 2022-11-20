import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "../../utils/types";

import styles from "./profile.module.css";
import {OrderSmall} from "../../components/order-small/order-small";
import {getCookie} from "../../services/utils";
import {WsConnectionStart, WsConnectionStop} from "../../services/actions/ws";
import {Link, Route, Switch, useLocation} from "react-router-dom";
import {ProtectedRoute} from "../../components/protected-route";
import ProfileOrderPage from "./order";
import ModalOrderInfo from "../../components/order-info/modal";

function ProfileOrders(){

    const {body: listOrders} = useSelector((state) => state.ws)

    const accessToken =  getCookie('access_token')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(WsConnectionStart(`wss://norma.nomoreparties.space/orders?token=${accessToken}`))
        return () => {
            dispatch(WsConnectionStop())
        }
    }, [])


    const location = useLocation<{ background_my: boolean}>();
    const background = (location.state as any)?.background_my;

    return (
        <div>
            <Switch location={background || location}>
                <ProtectedRoute path="/profile/orders" exact={true}>
                    <div>
                        <div className={styles.list_wrap}>
                            {listOrders.map((order) => (
                                <Link key={order._id}
                                      to={{
                                          pathname: `/profile/orders/${order._id}`,
                                          state: {
                                              background_my: location,
                                          }
                                      }}
                                      className={styles.link_clear}
                                >
                                    <OrderSmall showStatus={true} order={order} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </ProtectedRoute>
                <ProtectedRoute path="/profile/orders/:id" exact={true}>
                    <ProfileOrderPage listOrders={listOrders} />
                </ProtectedRoute>
            </Switch>
            {background && <Route path="/profile/orders/:id" children={<ModalOrderInfo />} />}
        </div>
    )
}

export default ProfileOrders;