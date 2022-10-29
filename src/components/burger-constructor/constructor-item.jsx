import React, {useEffect, useRef, useState} from "react";
import PropTypes from "prop-types";

import styles from './burger-constructor.module.css'


import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {ingredientType} from "../../utils/types";
import {useDispatch} from "react-redux";
import {REMOVE_INGREDIENT, SET_INGREDIENT_INDEX} from "../../services/actions/burger";
import {useDrag, useDrop} from "react-dnd";

export function ConstructorItem({pos, item, index}){

    const ref = useRef(null)
    const dispatch = useDispatch()

    const [, drop] = useDrop({
        accept: 'sort_ingredient',
        hover: (item, monitor) => {

            if (!ref.current || !monitor.isOver()) {
                return
            }

            const dragIndex = item.index
            const hoverIndex = index
            if (dragIndex === hoverIndex) {
                return
            }

            const hoverBoundingRect = ref.current.getBoundingClientRect()
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const clientOffset = monitor.getClientOffset()
            const hoverClientY = clientOffset.y - hoverBoundingRect.top

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }

            item.index = hoverIndex

            dispatch({
                type: SET_INGREDIENT_INDEX,
                dragIndex: dragIndex,
                hoverIndex: hoverIndex,
            })
        }
    })

    const [{isDragging}, drag] = useDrag({
        type: 'sort_ingredient',
        item: {
            index: index
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })

    const opacity = isDragging ? 0 : 1;

    let name = item.name;
    if(item.type === 'bun'){
        name += pos === 'top' ? " (вверх)" : pos === 'bottom' ? " (низ)" : '';
    }

    drag(drop(ref))

    return (
        <div className={styles.item} style={{opacity: opacity}} ref={ref}>
            {pos === '' ? <DragIcon type="primary" /> : null }
            <ConstructorElement
                type={pos}
                isLocked={pos !== ''}
                text={name}
                price={item.price}
                thumbnail={item.image}
                handleClose={() => dispatch({type: REMOVE_INGREDIENT, index: index})}
            />
        </div>
    )
}


ConstructorItem.propTypes = {
    item: ingredientType.isRequired,
    pos: PropTypes.string,
    index: PropTypes.number
}