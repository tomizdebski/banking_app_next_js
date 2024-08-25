import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Control, FieldPath} from 'react-hook-form';
import { z } from "zod";
import { authFormSchema } from "@/lib/utils";

interface CustomInput {
  control: Control<z.infer<typeof authFormSchema>>;
  name: FieldPath<z.infer<typeof authFormSchema>>;
  label: string;
  placeholder: string;
}

const CustomInput = ({ control , name, label, placeholder } : CustomInput) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>

          <FormControl>
            <Input placeholder={placeholder} {...field} className="input-class" />
          </FormControl>

          <FormDescription>This is your public display name.</FormDescription>
          <FormMessage className="form-message mt-2" />
        </FormItem>
        
      )}
    />
  );
};

export default CustomInput;
