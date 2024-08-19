import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_cvcvdj_list = createAsyncThunk(
  "cvcvdjs/api_v1_cvcvdj_list",
  async payload => {
    const response = await apiService.api_v1_cvcvdj_list(payload)
    return response.data
  }
)
export const api_v1_cvcvdj_create = createAsyncThunk(
  "cvcvdjs/api_v1_cvcvdj_create",
  async payload => {
    const response = await apiService.api_v1_cvcvdj_create(payload)
    return response.data
  }
)
export const api_v1_cvcvdj_retrieve = createAsyncThunk(
  "cvcvdjs/api_v1_cvcvdj_retrieve",
  async payload => {
    const response = await apiService.api_v1_cvcvdj_retrieve(payload)
    return response.data
  }
)
export const api_v1_cvcvdj_update = createAsyncThunk(
  "cvcvdjs/api_v1_cvcvdj_update",
  async payload => {
    const response = await apiService.api_v1_cvcvdj_update(payload)
    return response.data
  }
)
export const api_v1_cvcvdj_partial_update = createAsyncThunk(
  "cvcvdjs/api_v1_cvcvdj_partial_update",
  async payload => {
    const response = await apiService.api_v1_cvcvdj_partial_update(payload)
    return response.data
  }
)
export const api_v1_cvcvdj_destroy = createAsyncThunk(
  "cvcvdjs/api_v1_cvcvdj_destroy",
  async payload => {
    const response = await apiService.api_v1_cvcvdj_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const cvcvdjsSlice = createSlice({
  name: "cvcvdjs",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_cvcvdj_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_cvcvdj_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cvcvdj_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cvcvdj_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_cvcvdj_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cvcvdj_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cvcvdj_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_cvcvdj_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cvcvdj_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cvcvdj_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_cvcvdj_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cvcvdj_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cvcvdj_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_cvcvdj_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cvcvdj_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cvcvdj_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_cvcvdj_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_cvcvdj_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_cvcvdj_list,
  api_v1_cvcvdj_create,
  api_v1_cvcvdj_retrieve,
  api_v1_cvcvdj_update,
  api_v1_cvcvdj_partial_update,
  api_v1_cvcvdj_destroy,
  slice: cvcvdjsSlice
}
