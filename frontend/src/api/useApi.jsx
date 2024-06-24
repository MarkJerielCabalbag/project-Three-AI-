import { useQuery, useMutation } from "@tanstack/react-query";

//@desc   register user fn
//@method POST
async function register(formData) {
  return await fetch("http://localhost:8000/eduGemini/user/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  }).then(async (res) => {
    const responseData = await res.json();
    if (!res.ok) {
      console.log("Error");
      throw new Error(responseData.message || "An error occured");
    }
    return responseData;
  });
}

export const useRegister = ({ onSuccess, onError }) => {
  return useMutation({
    mutationFn: register,
    onSuccess,
    onError,
  });
};
