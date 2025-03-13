import MountingDemo from "../components/MountingDemo";
import InfoBox from "../components/InfoBox";

function MountingPage() {
  return (
    <div className="page-container">
      <InfoBox title="📘 useEffect &amp; de Mounting Fase">
        <p>
          In React wordt de <strong>mounting fase</strong> gedefinieerd als het
          moment waarop een component voor het eerst wordt toegevoegd aan de
          DOM.
        </p>
        <p>
          De <code>useEffect</code> hook laat je "side effects" uitvoeren in
          functionele componenten. Met een{" "}
          <strong>lege dependency array</strong> wordt de code in useEffect
          alleen uitgevoerd na de eerste render (mounting).
        </p>
        <p>
          <strong>Zonder useEffect</strong> wordt code binnen een component
          tijdens elke render uitgevoerd. Als je in deze code de state bijwerkt,
          veroorzaakt dit een nieuwe render, wat kan leiden tot een oneindige
          loop!
        </p>
      </InfoBox>

      <MountingDemo />
    </div>
  );
}

export default MountingPage;
