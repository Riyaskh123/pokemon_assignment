"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const Router = useRouter()
  Router.push("/categories", "/categories", { shallow: true });
}