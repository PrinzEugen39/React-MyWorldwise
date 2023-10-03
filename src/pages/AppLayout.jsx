import Map from "../component/Map"
import Sidebar from "../component/Sidebar"
import User from "../component/User"
import styles from './AppLayout.module.css'

function AppLayout() {
    return (
        <div className={styles.app}>
            <Sidebar />
            <Map />
            <User />
        </div>
    )
}

export default AppLayout
