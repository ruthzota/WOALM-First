import { useContext } from "react";
import { Card, Image } from "semantic-ui-react";
import AuthContext from "../Auth/AuthContext";
import SignOutButton from "../Auth/SignOutButton";
import Flex from "../Flex/Flex";
import styles from "./UserInfo.module.scss";

const UserInfo = () => {
  const { user } = useContext(AuthContext);
  return (
    <Card fluid>
      <Card.Content className={styles.content}>
        <Flex>
          <Flex middle left className={styles.avatar}>
            <Image src={user.photo} size="mini" circular />
          </Flex>
          <Flex vertical>
            <Flex bottom left className={styles.userName}>
              {user.displayName}
            </Flex>
            <Flex top left className={styles.email}>
              {user.email}
            </Flex>
          </Flex>
          <Flex center right>
            <SignOutButton />
          </Flex>
        </Flex>
      </Card.Content>
    </Card>
  );
};

export default UserInfo;