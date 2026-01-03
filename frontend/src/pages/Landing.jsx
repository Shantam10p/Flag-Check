import { useFlagCheck } from '../context/FlagCheckContext';

function Landing() {
  const { setCurrentScreen } = useFlagCheck();

  return (
    <div>
      <span>🚩</span>

      <h1>
        Is it a <span>🚩</span> or <span>💚</span>?
      </h1>

      <p>
        Get the truth about anyone in your life.
      </p>


      <div>
        <span>💕 Partners</span>
        <span>👯 Friends</span>
        <span>😵‍💫 Situationships</span>
        <span>💼 Coworkers</span>
        <span>💔 Strangers</span>
      </div>

       <button>
        Check Now
      </button>
      
    </div>
  );
}

export default Landing;