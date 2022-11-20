import React, {useEffect} from 'react';

import {Switch, Route, useLocation} from 'react-router-dom';

import FeedPage from "./feed"
import OrderPage from "./order"
import {useDispatch, useSelector} from "../../utils/types";
import {WsConnectionStart, WsConnectionStop} from "../../services/actions/ws";

function ProfileIndex() {
    const dispatch = useDispatch()

    const {body: listOrders, cntAll, cntToday} = useSelector((state) => state.ws)

    useEffect(() => {
        dispatch(WsConnectionStart('wss://norma.nomoreparties.space/orders/all'))
        return () => {
            dispatch(WsConnectionStop())
        }
    }, [])

    const location = useLocation<{ background_feed: boolean}>();
    const background = (location.state as any)?.background_feed;

    return (
        <div>
            <Switch location={background || location}>
                <Route path="/feed/:id" exact={true}>
                    <OrderPage listOrders={listOrders ?? []} />
                </Route>
                <Route path="/feed">
                    <FeedPage listOrders={listOrders} cntToday={cntToday} cntAll={cntAll} />
                </Route>
            </Switch>
        </div>
    )

}

export default  ProfileIndex