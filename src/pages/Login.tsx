import { Button } from "@mui/material";
import { useWalletSelector } from "../context/WalletSelectorContext";

function Login() {
  const { modal } = useWalletSelector() ?? {};

//   const { isLoading: m, data: dd } = useQuery(
//     ["login", ownerAddress],
//     () => login(ownerAddress),
//     {
//       onError: (error) => {
//         toast.error("Something went wrong.", {
//           position: "top-right",
//         });
//       },
//     }
//   );

//   console.log(dd)

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <Button onClick={() => modal?.show()}>Login with Near</Button>
    </div>
  );
}

export default Login;
