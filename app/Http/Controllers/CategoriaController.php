<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use Illuminate\Http\Request;

class CategoriaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        //dd($request);
        $texto=trim($request->get('texto'));
        $registros=Categoria::where('nombre', 'like', '%' . $texto . '%')->paginate(10);
        return view('categoria.index',compact('registros','texto'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categoria= new Categoria();
        return view('categoria.action',['categoria'=>new Categoria()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $registro = new Categoria;
        $registro->nombre=$request->input('nombre');
        $registro->imagen="";
        $registro->save();
        return response()->json([
            'status'=> 'success',
            'message'=>'Registro creado satisfactoriamente'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Categoria $categoria)
    {
        return "Mostrar";
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $categoria=Categoria::findOrFail($id);
        return view('categoria.action',compact('categoria'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Categoria $categoria)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Categoria $categoria)
    {
        //
    }
}
