import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'; // Use index.css since App.css does not exist

const HeroButtons = () => {
  return (
    <div className="d-flex gap-3 mb-5">
      <a href="#contact-form" className="btn-hero">Start Conversation</a>
      <a href="#schedule" className="btn btn-outline-primary btn-lg">Schedule Call</a>
    </div>
  );
};

export default HeroButtons; 