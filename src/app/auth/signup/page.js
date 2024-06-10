"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; 
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "@/graphql/mutations"; 
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import styles from "./index.module.scss";
import Link from "next/link";

const SignupPage = () => {
    const router = useRouter(); 
    const [register, { loading, error }] = useMutation(REGISTER_USER); 

    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            const { data } = await register({
                variables: {
                    first_name: form.first_name,
                    last_name: form.last_name,
                    email: form.email,
                    password: form.password,
                },
            });

            
            console.log("Inscription réussie : ", data);

           
            if (data && data.register && data.register.user_id) {
                router.push("/auth/signin"); 
            } else {
                console.error("Échec de l'inscription :", data);
            }
        } catch (error) {
            console.error("Erreur lors de l'inscription de l'utilisateur :", error);
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.formContainer}>
                <img className={styles.logo} src="/Logo.png" />
                <form className={styles.form} onSubmit={submitForm}>
                    <Input
                        label="Prénom"
                        name="first_name"
                        type="text"
                        value={form.first_name}
                        handleChange={handleChange}
                    />
                    <Input
                        label="Nom"
                        name="last_name"
                        type="text"
                        value={form.last_name}
                        handleChange={handleChange}
                    />
                    <Input
                        label="Email"
                        name="email"
                        type="email"
                        value={form.email}
                        handleChange={handleChange}
                    />
                    <Input
                        label="Mot de passe"
                        type="password"
                        name="password"
                        value={form.password}
                        handleChange={handleChange}
                    />
                    <Button type="submit" text="S'inscrire" color="primary" />
                    {loading && <p>Loading...</p>}
                    {error && <p>Error: {error.message}</p>}
                </form>
                <Link href={'/auth/signin'}>
                 <p>Se connecter</p>
                </Link>
            </div>
        </div>
        
    );
};

export default SignupPage;
