import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { notification} from "antd"
export const adminHotProduct = createAsyncThunk(
    "auth/hotproduct",
    async ({ title,price,description,image,category }) => {
        
        try {
            const config = {
                headers: {
                    "content-Type": "application/json",
                },
            }
            const { data } = await axios.post(
                'https://fakestoreapi.com/products',
                { title,price,description,image,category  },
                config
            )
            notification.success({
                message: "Success",
                description:"Logged in successfully"
            })
            return data;
        } catch (error) {
            console.log("sada",error);
            notification.error({
                message: "Error",
                description: error?.response?.data
        })
        }
    }
)