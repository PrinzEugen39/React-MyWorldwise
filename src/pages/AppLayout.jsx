import Map from "../component/Map"
import Sidebar from "../component/Sidebar"
import styles from './AppLayout.module.css'

function AppLayout() {
    return (
        <div className={styles.app}>
            <Sidebar />
            <Map />
        </div>
    )
}

export default AppLayout
