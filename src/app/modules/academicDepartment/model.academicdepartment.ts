
import { model, Schema } from "mongoose";
import { TAcademicDepartment } from "./interface.academicDepartment";

const academicDepartmentSchema = new Schema<TAcademicDepartment>({

    name: {
        type: String,
        trim: true,
        required: true
    },
    academicFaculty: {
        type: Schema.Types.ObjectId,
        required: true, ref: "AcademicFacultyModel",
    },

}, { timestamps: true });


// checking that department already exists or not
academicDepartmentSchema.pre("save", async function (next) {
    const isSemesterExist = await AcademicDepartmentModel.findOne({
        name: this.name
    })
    if (isSemesterExist) {
        throw new Error("Academic Department already exist, You can not create duplicate department")
    }
    else {
        next()
    }

})


export const AcademicDepartmentModel = model<TAcademicDepartment>('AcademicDepartment', academicDepartmentSchema);