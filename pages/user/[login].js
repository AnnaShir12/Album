import Page from "../../components/album/Page";
import Link from "next/link";
import { Container } from "react-bootstrap";

function UserPage({ profile }) {
  return (
    <div>
      <Page>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Container>
          <div className="profile__card">
            <h1 className="profile__title">@{profile.login}</h1>
            <div className="profile__info">
              <img className="profile__img" src={profile.avatar_url} />
              <div className="profile__email">E-mail: {profile.email}</div>
              <div className="profile__bio">Bio: {profile.bio}</div>
              <div className="profile__followers">
                Followers: {profile.followers}
              </div>
            </div>
          </div>
        </Container>
      </Page>

      <style jsx>{`
        .profile__card {
          background-color: white;
          width: 30%;
          margin: 20px auto;
          padding: 30px;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          text-align: center;
        }
        .profile__title {
          text-align: center;
          font-size: 24px;
          font-weight: 700;
          color: #007bff;
        }
        .profile__img {
          width: 150px;
        }

        .profile__info {
          font-size: 16px;
          color: #626262;
        }
      `}</style>
    </div>
  );
}

UserPage.getInitialProps = async function({ query }) {
  let { login } = query;
  let profile = null;
  try {
    const res = await fetch(`https://api.github.com/users/${login}`);
    if (res.status === 200) {
      profile = await res.json();
    }
  } catch (error) {
    console.log("error =>", error);
  }

  return { profile };
};

export default UserPage;
