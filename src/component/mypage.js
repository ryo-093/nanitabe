// import { AmplifySignOut } from "@aws-amplify/ui-react";
import Footer from './../js/mkFooter';

const ComponentF = () => {
    return (
        <body>
            <div>
                <h1>マイページ</h1>
                <p>コンテンツ</p>
                  {({ signOut, user }) => (
                        <main>
                        <h1>Hello {user.username}</h1>
                        <button onClick={signOut}>Sign out</button>
                        </main>
                    )}
            </div>
            <Footer />
        </body>
    )
}
export default ComponentF