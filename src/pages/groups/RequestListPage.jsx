import { ActiveSideBarMenu } from '../../constants/activeSideBarMenu';
import DashboardLayout from '../../layout/Dashboard';

const RequestListPage = () => {
    return (
        <DashboardLayout active={ActiveSideBarMenu.RequestList}>
            request list page
        </DashboardLayout>
    );
}

export default RequestListPage;
