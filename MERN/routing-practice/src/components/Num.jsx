import { useParams } from 'react-router';

const Num = () => {
    const { id, color1 , color2} = useParams();

    return (
        <div style={{backgroundColor : color2 }}>
            <h1 style={{ color: color1 }}> {isNaN(id) ? `The word is: ${id}` : `The number is: ${id}`}</h1>
        </div>
    )
}

export default Num;