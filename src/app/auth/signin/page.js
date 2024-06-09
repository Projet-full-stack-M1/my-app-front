"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@apollo/client";
import { LOGIN } from "@/graphql/mutations"; 
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import styles from "./index.module.scss";

const Page = () => {
    const router = useRouter(); 
    const [login, { loading, error }] = useMutation(LOGIN); 

    const [form, setForm] = useState({
        Email: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            const { data } = await login({
                variables: {
                    email: form.Email,
                    password: form.password,
                },
            });
            console.log(data);

            if (data && data.login && data.login.token) {
                console.log("Connexion réussie : ", data);
                router.push("/"); 
            } else {
                console.error("Login failed:", data);
            }
        } catch (error) {
            console.error("Error logging in user:", error);
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.formContainer}>
                <img className={styles.logo} src="/Logo.png" />
                <form className={styles.form} onSubmit={submitForm}>
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
                    <Button type="submit" text="Se connecter" />
                    {loading && <p>Loading...</p>}
                    {error && <p>Error: {error.message}</p>}
                </form>
            </div>
        </div>
    );
};

export default Page;
