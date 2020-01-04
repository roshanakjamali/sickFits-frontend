import Reset from "../components/Reset";
const ResetPage = props => (
  <div>
    <h2>Reset your password</h2>
    <Reset resetToken={props.query.resetToken} />
  </div>
);

export default ResetPage;
