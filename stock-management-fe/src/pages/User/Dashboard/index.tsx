import { Avatar, Box, Button, Typography, styled } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Search, Notifications, Add, ExpandLess } from "@mui/icons-material";
import CustomTextField from "../../../component/customeTextField";
import CustomChart from "../../../component/customeChart";
import CustomLineChart from "../../../component/customeChart";

const renderUserSearch = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 8, md: 9 }}>
        <CustomTextField
          label={""}
          value={""}
          placeholder="Search"
          customStyle={{ maxWidth: "320px" }}
          startIcon={<Search />}
        />
      </Grid>
      <Grid size={{ xs: 4, md: 3 }}>
        <UserInfoContainer>
          <Box>
            <Notifications />
          </Box>
          <UserInfoBox>
            <Avatar />
            <Typography>Bonnie Green Bonnie GreenBonnie Green</Typography>
          </UserInfoBox>
        </UserInfoContainer>
      </Grid>
    </Grid>
  );
};

const renderNewTask = () => {
  return (
    <NewTaskBox>
      <Box style={{ maxWidth: "130px" }}>
        <NewTaskButton startIcon={<Add />}>New Task</NewTaskButton>
      </Box>
      <ShareExportBox>
        <ShareButton className="share-btn">Share</ShareButton>
        <ShareButton className="export-btn">Export</ShareButton>
      </ShareExportBox>
    </NewTaskBox>
  );
};

const renderSaleChar = () => {
  return (
    <SaleCharContainer>
      <SaleInfoBox>
        <InfoBox>
          <Typography variant="h6">Sales Value</Typography>
          <ValueTypo variant="h5">$90.75</ValueTypo>
          <DayTypo variant="h5">
            Yesterday{" "}
            <DayBox>
              <ExpandLess />
              30.03%
            </DayBox>
          </DayTypo>
        </InfoBox>
        <SaleButtonBox>
          <Button className="selectedButton">Week</Button>
          <Button className="notSelectedBtn">Month</Button>
        </SaleButtonBox>
      </SaleInfoBox>
      {/* <CustomLineChart data={undefined} /> */}
    </SaleCharContainer>
  );
};
const Dashboard = () => {
  return (
    <Box style={{ width: "100%" }}>
      {renderUserSearch()}
      {renderNewTask()}
      {renderSaleChar()}
      <Grid container spacing={3}>
        <Grid size={12}>
          <Item style={{ backgroundColor: "skyblue" }}>chart</Item>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid size={4}>
          <Item style={{ backgroundColor: "peru" }}>customer</Item>
        </Grid>
        <Grid size={4}>
          <Item style={{ backgroundColor: "pink" }}>Revenue</Item>
        </Grid>
        <Grid size={4}>
          <Item style={{ backgroundColor: "plum" }}>Traffic share</Item>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid size={8.5}>
          <Item style={{ backgroundColor: "seagreen" }}>page visiter</Item>
        </Grid>
        <Grid size={3.5}>
          <Item style={{ backgroundColor: "palegreen" }}>orders</Item>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid size={8.5}>
          <Grid container spacing={3}>
            <Grid size={6}>
              <Item style={{ backgroundColor: "seagreen" }}>member</Item>
            </Grid>
            <Grid size={6}>
              <Item style={{ backgroundColor: "palegreen" }}>progress</Item>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={3.5}>
          <Item style={{ backgroundColor: "palegreen" }}>rank</Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;

const Item = styled(Box)(({ theme }) => ({
  // backgroundColor: "#fff",
  // ...theme.typography.body2,
  // // padding: theme.spacing(1),
  // textAlign: "center",
  // color: theme.palette.text.secondary,
  // ...theme.applyStyles("dark", {
  //   backgroundColor: "#1A2027",
  // }),
}));
const UserInfoContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "20px",
});
const UserInfoBox = styled(Box)({
  display: "flex",
  gap: 10,
  alignItems: "center",
});
const NewTaskBox = styled(Box)({
  margin: "20px 0px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
});

const NewTaskButton = styled(Button)({
  backgroundColor: "#262b40",
  color: "#fff",
  fontSize: 14,
  fontWeight: 600,
  textTransform: "none",
  // width: "100%",
  height: "31px",
  borderRadius: "5px",
});
const ShareExportBox = styled(Box)({
  border: "1px solid #262b40",
  borderRadius: "10px",
  height: "31px",
  "& .export-btn": {
    borderLeft: "1px solid #262b40",
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  "& .share-btn": {
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
});
const ShareButton = styled(Button)({
  backgroundColor: "#fff",
  color: "#262b40",
  fontSize: 14,
  fontWeight: 600,
  textTransform: "none",
  borderRadius: 0,
  maxWidth: "31px",
  height: "100%",
  "&:hover": {
    backgroundColor: "#262b40",
    color: "#fff",
  },
});
const SaleCharContainer = styled(Box)({
  backgroundColor: "#acebfd",
  borderRadius: "10px",
  marginTop: "10px",
  padding: "20px",
});
const SaleInfoBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: 25,
});
const InfoBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

const ValueTypo = styled(Typography)({
  fontSize: "1.5rem",
  fontWeight: "bold",
  lineHeight: 1.6,
});
const DayTypo = styled(Typography)({
  fontSize: "0.875em",
  fontWeight: 400,
  lineHeight: 1.6,
  display: "flex",
  alignItems: "center",
});
const DayBox = styled(`span`)({
  display: "flex",
  alignItems: "center",
  color: "green",
  flexDirection: "row",
});
const SaleButtonBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  height: "31px",
  "& .selectedButton": {
    backgroundColor: "#61dafb",
    color: "#262b40",
    fontSize: 14,
    fontWeight: 600,
    textTransform: "none",
    borderRadius: "0.5rem",
    height: "100%",
    "&:hover": {
      backgroundColor: "#262b40",
      color: "#fff",
    },
  },
  "& .notSelectedBtn": {
    backgroundColor: "#262b40",
    color: "#fff",
    fontSize: 14,
    fontWeight: 600,
    textTransform: "none",
    borderRadius: "0.5rem",
    height: "100%",
    "&:hover": {
      backgroundColor: "#262b40",
      color: "#fff",
    },
  },
});
