// import React ,{useState}from 'react';
import classes from './HomePage.module.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faClose } from '@fortawesome/free-solid-svg-icons';
// import StudentApp from '../Management/StudentApp';

const HomePage = (props) => {
    // const [showMangement, setShowMangement] = useState(false);

    // const showMangementButton = () => {
    //     setShowMangement(true);
    // };

    // // const hideMangement = () => {
    // //     setShowMangement(false);
    // // };

    return (
        <div className={classes.HomePage}>
            {/* <div className={classes.Close}>
                <FontAwesomeIcon icon={faClose}
                    onClick={() => {
                        props.onHide();
                    }} />

            </div>
            <button className={classes.managementButton} onClick={showMangementButton}>管理系统</button>\
            {showMangement && <StudentApp />} */}
        </div>
    )



}

export default HomePage;