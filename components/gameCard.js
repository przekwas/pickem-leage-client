import Layout from '../components/layout';

const GameCard = ({ game }) => {
    return (
        <div className='box'>
            <div className='columns has-text-centered'>
                <div className='column'>{game['home'].name}</div>
                <div className='column'>vs.</div>
                <div className='column'>{game['away'].name}</div>
            </div>
        </div>
    );
}

export default GameCard;