<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TipoComprobanteRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        switch ($this->method()) {
            case 'POST':
                return [
                    'codigo' => 'required|unique:tipo_comprobantes|max:70',
                    'nombre' => 'max:70',
                ];
            case 'PUT':
            case 'PATCH':
            {
                return [
                    'codigo' => 'required|unique:tipo_comprobantes,codigo,'.$this->get('id').'|max:70',
                    'nombre' => 'max:70',
                ];
            }
            default:
                # code...
                break;
        }
    }
}
