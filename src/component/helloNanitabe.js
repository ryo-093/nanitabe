import { useNavigateAction } from "@aws-amplify/ui-react/internal";

const ComponentA = () => {
    const buttonOnClick = useNavigateAction({
        type: "url",
        // url: `${"./invchat?sellId="}${list.id}`,
        url: `${"./map"}`,
      });

    return (
        <div className="notDisplay">
            <h1>アプリ名募集中！！！</h1>
            <div class="button01">
                <button onClick={() => {buttonOnClick();}}>はじめる</button>
            </div>
        </div>
    )
}
export default ComponentA