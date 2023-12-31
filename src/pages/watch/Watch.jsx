import { ArrowBackOutlined } from "@mui/icons-material";
import "./watch.scss";
import { useNavigate } from "react-router-dom";

export default function Watch() {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };
  return (
    <div className="watch">
      <div className="back" onClick={handleHome}>
        <ArrowBackOutlined />
        Home
      </div>
      <video
        src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
        autoPlay
        progress
        controls
      ></video>
    </div>
  );
}
