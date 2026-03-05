import { ActiveSideBarMenu } from "../../constants/activeSideBarMenu"
import DashboardLayout from "../../layout/Dashboard"

import './css/GroupRequest.css'

const GroupRequestPage = () => {
    return (
        <DashboardLayout active={ActiveSideBarMenu.GroupDetail}>
            <main class="main">

                <section class="group-requests">

                    <div class="group-header">
                        <h2>Group requests</h2>
                        <div class="search-box">
                            <input type="text" placeholder="Search anything..." />
                            <img src="Vector.png" class="search-icon" alt="search" />
                        </div>
                    </div>


                    <div class="request-table">

                        <div class="table-header">
                            <span>Name</span>
                            <span>Email</span>
                            <span>Approve</span>
                            <span>Decline</span>
                        </div>

                        <div class="table-row">
                            <span>Jackson Roach</span>
                            <span>jar44@aber.ac.uk</span>
                            <button class="approve">✓</button>
                            <button class="decline">✕</button>
                        </div>

                        <div class="table-row">
                            <span>Lauryn Cantu</span>
                            <span>lac12@aber.ac.uk</span>
                            <button class="approve">✓</button>
                            <button class="decline">✕</button>
                        </div>

                        <div class="table-row">
                            <span>Piers Gutierrez</span>
                            <span>pig3@aber.ac.uk</span>
                            <button class="approve">✓</button>
                            <button class="decline">✕</button>
                        </div>

                        <div class="table-row">
                            <span>Ivy Jones</span>
                            <span>ivj7@aber.ac.uk</span>
                            <button class="approve">✓</button>
                            <button class="decline">✕</button>
                        </div>

                        <div class="table-row">
                            <span>Montana Southern</span>
                            <span>mos26@aber.ac.uk</span>
                            <button class="approve">✓</button>
                            <button class="decline">✕</button>
                        </div>

                    </div>

                </section>

            </main>
        </DashboardLayout>
    )
}

export default GroupRequestPage