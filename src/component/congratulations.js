import Footer from './../js/mkFooter';
import { useNavigateAction } from "@aws-amplify/ui-react/internal";

const ComponentI = () => {
    const buttonOnClick = useNavigateAction({
        type: "url",
        // url: `${"./timeline"}`,
        url: `${"./map"}`,
      });

    return (
        <body>
            <div>
                <h1>出品が完了しました</h1>
            </div>
            <div class="button01">
                <button onClick={() => {buttonOnClick();}}>もどる</button>
            </div>
            <Footer />
        </body>
    )
}
export default ComponentI