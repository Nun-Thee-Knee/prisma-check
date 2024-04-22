'use client'
import Button from "./Button"
import {useForm} from "react-hook-form";
import { useState } from "react";


type formData = {
  classroomName: string,
  classCode: string
}

const onSubmit = (classroomName:string) => {
  console.log(classroomName)
}

const Form = () => {
  const [classCode, setCode] = useState("");
  const {
    register,
    handleSubmit,
    getValues
  } = useForm();
  return (
    <form onSubmit={handleSubmit(()=>{onSubmit(getValues('classroomName'))})} action="">
      <div className="h-[100vh] bg-purple-400 flex items-center justify-center p-20">
        <div className="bg-white p-16 h-auto w-auto rounded-lg flex flex-col gap-10">
            <div className="flex flex-row gap-3">
                <h1>Name: </h1>
                <input {...register("classroomName")} type="text" className="w-full border-[1px]"/>
            </div>
            <div className={`flex flex-row gap-3 ${!classCode?"hidden":""}`}>
                <h1>Code Assigned to you - </h1>
                <h1 className="text-purple-400">{classCode}</h1>
            </div>
            <Button text="Submit" />
        </div>
    </div>
    </form>
  )
}

export default Form