




// export default function SignUp() {
//   const onSubmit = (event) => {
//     event.preventDefault();
//   };
//   return (
//     <div>
//       <h1>Sign Up</h1>
//       <form >
//       <input type="text" name="Prénom" /> 
//       <input type="text" name="Nom" />
//       <input
// 					label="Email"
// 					name="Email"
// 					type="email"
// 					// value={form.mail}
// 					// handleChange={handleChange}
// 				/>
//       <button type="submit">Submit</button>
//     </form>
//     </div>
//   );
// }



"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
// import Title from "@/components/UI/Title";
import styles from "./index.module.scss";

const Page = () => {

	const router = useRouter();

	const [form, setForm] = useState({
		Nom: "",
		Prenom: "",
		Email: "",
		password: "",
    });
    
	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
    };
    
  //   const submitForm = async () => {
	// 	try {
	// 		const res = await fetch('/api/auth/register', {
	// 			method: 'POST',
	// 			body: JSON.stringify(form),
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 			},
	// 		});
	// 		const data = await res.json();
	// 		console.log(data);
	// 		if (data?.success) {
	// 			router.push('/account/profil');					
	// 		} 
	// 	}
	// 	catch (err) {
	// 		console.log(err);
	// 	}
		
	// }
	
	return (
        <div className={styles.wrapper}>
		{/* <div className={styles.logo}>
                <video src="/logo.mp4" autoPlay loop muted width={50} height={50} />
            </div> */}
			<div className={styles.formContainer}>
			{/* <div className={styles.logo}> */}
                <img className={styles.logo} src="/Logo.png"   />
            {/* </div> */}
            {/* <Title title="GOURMET GURU" color="primary" /> */}
            <form className={styles.form}
                onSubmit={(e) => {
                    e.preventDefault();
					submitForm();
				}}
			>
				
				<Input
					label="Email"
					name="Email"
					type="email"
					value={form.email}
					handleChange={handleChange}
				/>
				<Input
					label="Password"
					type="password"
					name="password"
					value={form.password}
					handleChange={handleChange}
				/>
				<Button type="submit" text="Se connecter" color="primary" />
			</form>
			</div>
		</div>
	);
};

export default Page;


  