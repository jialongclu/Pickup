import MatchingCard from '../../components/MatchingCard';
import FilterBar from '../../components/FilterBar';
import './MatchingScreen.css';

function MatchingScreen() {
    return (
        <div className="matchingScreen">
            <FilterBar/>
            <MatchingCard />
        </div>
    );
}

export default MatchingScreen;
