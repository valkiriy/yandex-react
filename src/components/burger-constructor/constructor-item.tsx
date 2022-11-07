import React, {useRef} from "react";

import styles from './burger-constructor.module.css'

import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {TIngredient, TypeIngredient} from "../../utils/types";
import {useDispatch} from "react-redux";
import {REMOVE_INGREDIENT, SET_INGREDIENT_INDEX} from "../../services/actions/burger";
import {useDrag, useDrop, XYCoord} from "react-dnd";

interface IConstructorItem {
    item: TIngredient,
    pos: 'top' | 'bottom'| undefined,
    index: number
}

export function ConstructorItem({pos = undefined, item, index}: IConstructorItem){

    const ref = useRef<HTMLInputElement>(null)
    const dispatch = useDispatch()

    const [, drop] = useDrop({
        accept: 'sort_ingredient',
        hover: (item:IConstructorItem, monitor) => {

            if (!ref.current || !monitor.isOver()) {
                return
            }

            const dragIndex:number = item.index
            const hoverIndex:number = index
            if (dragIndex === hoverIndex) {
                return
            }

            const hoverBoundingRect = ref.current.getBoundingClientRect()
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const clientOffset: XYCoord | null = monitor.getClientOffset()

            if(!clientOffset){
                return
            }

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
    if(item.type === TypeIngredient.BUN){
        name += pos === 'top' ? " (вверх)" : pos === 'bottom' ? " (низ)" : '';
    }

    drag(drop(ref))

    return (
        <div className={styles.item} style={{opacity: opacity}} ref={ref}>
            {pos === undefined ? <DragIcon type="primary" /> : null }
            <ConstructorElement
                type={pos}
                isLocked={pos !== undefined}
                text={name}
                price={item.price}
                thumbnail={item.image}
                handleClose={() => dispatch({type: REMOVE_INGREDIENT, index: index})}
            />
        </div>
    )
}