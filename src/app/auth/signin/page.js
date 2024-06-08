"use client";
import { useState } from "react";
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../../graphql/mutations'; 
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import styles from "./index.module.scss";
import { fetchApi } from "../../../services/fetchapi";
const Page = () => {

    // const [loginUser] = useMutation(LOGIN);
	const [form, setForm] = useState({
		Email: "",
		password: "",
    });

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
    };
    
    // const submitForm = async () => {
    //     try {
    //         const { data } = await loginUser({
    //             variables: {
    //                 email: form.Email,
    //                 password: form.password
    //             }
    //         });
    //         // Stockez le token JWT et l'utilisateur dans le contexte ou dans un cookie, selon votre choix
    //         console.log(data); 
    //     } catch (error) {
    //         console.error('Error logging in user:', error);
          
    //     }
    // };

	const submitForm = async () => {
        try {
            const query = `
                mutation Login($email: String!, $password: String!) {
                    login(email: $email, password: $password) {
                        token
                        user {
                            user_id
                            first_name
                            last_name
                            email
                            # Ajoutez d'autres champs si nécessaire
                        }
                    }
                }
            `;

            const variables = {
                email: form.Email,
                password: form.password
            };

            // Utilisez la fonction fetchApi au lieu de useMutation
            const { data } = await fetchApi(query, variables);
            // Stockez le token JWT et l'utilisateur dans le contexte ou dans un cookie, selon votre choix
            console.log(data); 
        } catch (error) {
            console.error('Error logging in user:', error);
        }
    };

	return (
        <div className={styles.wrapper}>
			<div className={styles.formContainer}>
                <img className={styles.logo} src="/Logo.png"   />
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
                        value={form.Email}
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
