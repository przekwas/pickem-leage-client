import Layout from '../components/layout';
import { json } from '../utils/api';
import GameCard from '../components/gameCard';

const About = ({ games }) => {

    return (
        <Layout>
            <section className='section'>
                <div className='container'>
                    {games.map((game, i) => <GameCard key={i} game={game} />)}
                </div>
            </section>
        </Layout>
    );

}

About.getInitialProps = async ({ req }) => {
    const games = await json('http://localhost:3005/games/1');
    return { games };
}

export default About;