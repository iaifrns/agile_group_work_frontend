import { ActiveSideBarMenu } from "../../constants/activeSideBarMenu"
import DashboardLayout from "../../layout/Dashboard"

import './css/GroupRequest.css'

const GroupRequestPage = () => {
    return (
        <DashboardLayout active={ActiveSideBarMenu.GroupDetail}>
            <main className="main">

                <section className="group-requests">

                    <div className="group-header">
                        <h2>Group requests</h2>
                        <div className="search-box">
                            <input type="text" placeholder="Search anything..." />
                            <img src="Vector.png" className="search-icon" alt="search" />
                        </div>
                    </div>


                    <div className="request-table">

                        <div className="table-header">
                            <span>Name</span>
                            <span>Email</span>
                            <span>Approve</span>
                            <span>Decline</span>
                        </div>

                        <div className="table-row">
                            <span>Jackson Roach</span>
                            <span>jar44@aber.ac.uk</span>
                            <button className="approve">✓</button>
                            <button className="decline">✕</button>
                        </div>

                        <div className="table-row">
                            <span>Lauryn Cantu</span>
                            <span>lac12@aber.ac.uk</span>
                            <button className="approve">✓</button>
                            <button className="decline">✕</button>
                        </div>

                        <div className="table-row">
                            <span>Piers Gutierrez</span>
                            <span>pig3@aber.ac.uk</span>
                            <button className="approve">✓</button>
                            <button className="decline">✕</button>
                        </div>

                        <div className="table-row">
                            <span>Ivy Jones</span>
                            <span>ivj7@aber.ac.uk</span>
                            <button className="approve">✓</button>
                            <button className="decline">✕</button>
                        </div>

                        <div className="table-row">
                            <span>Montana Southern</span>
                            <span>mos26@aber.ac.uk</span>
                            <button className="approve">✓</button>
                            <button className="decline">✕</button>
                        </div>

                    </div>

                </section>

            </main>
        </DashboardLayout>
    )
}

export default GroupRequestPage