import {AiFillEdit, AiFillDelete} from 'react-icons/ai';

export const MyMeals = ({text, updatingInput, deleteMeal}) => {
    return (
        <div>
            <p>{text}</p>
            <AiFillEdit onClick={updatingInput}></AiFillEdit>
            <AiFillDelete onClick={deleteMeal}></AiFillDelete>
        </div>
    )
}