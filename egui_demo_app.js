let wasm_bindgen;
(function() {
    const __exports = {};
    let script_src;
    if (typeof document !== 'undefined' && document.currentScript !== null) {
        script_src = new URL(document.currentScript.src, location.href).toString();
    }
    let wasm = undefined;

    function isLikeNone(x) {
        return x === undefined || x === null;
    }

    function addToExternrefTable0(obj) {
        const idx = wasm.__externref_table_alloc();
        wasm.__wbindgen_export_1.set(idx, obj);
        return idx;
    }

    const cachedTextDecoder = (typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-8', { ignoreBOM: true, fatal: true }) : { decode: () => { throw Error('TextDecoder not available') } } );

    if (typeof TextDecoder !== 'undefined') { cachedTextDecoder.decode(); };

    let cachedUint8ArrayMemory0 = null;

    function getUint8ArrayMemory0() {
        if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
            cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
        }
        return cachedUint8ArrayMemory0;
    }

    function getStringFromWasm0(ptr, len) {
        ptr = ptr >>> 0;
        return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
    }

    function handleError(f, args) {
        try {
            return f.apply(this, args);
        } catch (e) {
            const idx = addToExternrefTable0(e);
            wasm.__wbindgen_exn_store(idx);
        }
    }

    let cachedFloat32ArrayMemory0 = null;

    function getFloat32ArrayMemory0() {
        if (cachedFloat32ArrayMemory0 === null || cachedFloat32ArrayMemory0.byteLength === 0) {
            cachedFloat32ArrayMemory0 = new Float32Array(wasm.memory.buffer);
        }
        return cachedFloat32ArrayMemory0;
    }

    function getArrayF32FromWasm0(ptr, len) {
        ptr = ptr >>> 0;
        return getFloat32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
    }

    let cachedInt32ArrayMemory0 = null;

    function getInt32ArrayMemory0() {
        if (cachedInt32ArrayMemory0 === null || cachedInt32ArrayMemory0.byteLength === 0) {
            cachedInt32ArrayMemory0 = new Int32Array(wasm.memory.buffer);
        }
        return cachedInt32ArrayMemory0;
    }

    function getArrayI32FromWasm0(ptr, len) {
        ptr = ptr >>> 0;
        return getInt32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
    }

    let cachedUint32ArrayMemory0 = null;

    function getUint32ArrayMemory0() {
        if (cachedUint32ArrayMemory0 === null || cachedUint32ArrayMemory0.byteLength === 0) {
            cachedUint32ArrayMemory0 = new Uint32Array(wasm.memory.buffer);
        }
        return cachedUint32ArrayMemory0;
    }

    function getArrayU32FromWasm0(ptr, len) {
        ptr = ptr >>> 0;
        return getUint32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
    }

    let WASM_VECTOR_LEN = 0;

    const cachedTextEncoder = (typeof TextEncoder !== 'undefined' ? new TextEncoder('utf-8') : { encode: () => { throw Error('TextEncoder not available') } } );

    const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
        ? function (arg, view) {
        return cachedTextEncoder.encodeInto(arg, view);
    }
        : function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    });

    function passStringToWasm0(arg, malloc, realloc) {

        if (realloc === undefined) {
            const buf = cachedTextEncoder.encode(arg);
            const ptr = malloc(buf.length, 1) >>> 0;
            getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
            WASM_VECTOR_LEN = buf.length;
            return ptr;
        }

        let len = arg.length;
        let ptr = malloc(len, 1) >>> 0;

        const mem = getUint8ArrayMemory0();

        let offset = 0;

        for (; offset < len; offset++) {
            const code = arg.charCodeAt(offset);
            if (code > 0x7F) break;
            mem[ptr + offset] = code;
        }

        if (offset !== len) {
            if (offset !== 0) {
                arg = arg.slice(offset);
            }
            ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
            const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
            const ret = encodeString(arg, view);

            offset += ret.written;
            ptr = realloc(ptr, len, offset, 1) >>> 0;
        }

        WASM_VECTOR_LEN = offset;
        return ptr;
    }

    let cachedDataViewMemory0 = null;

    function getDataViewMemory0() {
        if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
            cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
        }
        return cachedDataViewMemory0;
    }

    const CLOSURE_DTORS = (typeof FinalizationRegistry === 'undefined')
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry(state => {
        wasm.__wbindgen_export_6.get(state.dtor)(state.a, state.b)
    });

    function makeMutClosure(arg0, arg1, dtor, f) {
        const state = { a: arg0, b: arg1, cnt: 1, dtor };
        const real = (...args) => {
            // First up with a closure we increment the internal reference
            // count. This ensures that the Rust closure environment won't
            // be deallocated while we're invoking it.
            state.cnt++;
            const a = state.a;
            state.a = 0;
            try {
                return f(a, state.b, ...args);
            } finally {
                if (--state.cnt === 0) {
                    wasm.__wbindgen_export_6.get(state.dtor)(a, state.b);
                    CLOSURE_DTORS.unregister(state);
                } else {
                    state.a = a;
                }
            }
        };
        real.original = state;
        CLOSURE_DTORS.register(real, state, state);
        return real;
    }

    function debugString(val) {
        // primitive types
        const type = typeof val;
        if (type == 'number' || type == 'boolean' || val == null) {
            return  `${val}`;
        }
        if (type == 'string') {
            return `"${val}"`;
        }
        if (type == 'symbol') {
            const description = val.description;
            if (description == null) {
                return 'Symbol';
            } else {
                return `Symbol(${description})`;
            }
        }
        if (type == 'function') {
            const name = val.name;
            if (typeof name == 'string' && name.length > 0) {
                return `Function(${name})`;
            } else {
                return 'Function';
            }
        }
        // objects
        if (Array.isArray(val)) {
            const length = val.length;
            let debug = '[';
            if (length > 0) {
                debug += debugString(val[0]);
            }
            for(let i = 1; i < length; i++) {
                debug += ', ' + debugString(val[i]);
            }
            debug += ']';
            return debug;
        }
        // Test for built-in
        const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
        let className;
        if (builtInMatches && builtInMatches.length > 1) {
            className = builtInMatches[1];
        } else {
            // Failed to match the standard '[object ClassName]'
            return toString.call(val);
        }
        if (className == 'Object') {
            // we're a user defined class or Object
            // JSON.stringify avoids problems with cycles, and is generally much
            // easier than looping through ownProperties of `val`.
            try {
                return 'Object(' + JSON.stringify(val) + ')';
            } catch (_) {
                return 'Object';
            }
        }
        // errors
        if (val instanceof Error) {
            return `${val.name}: ${val.message}\n${val.stack}`;
        }
        // TODO we could test for more things here, like `Set`s and `Map`s.
        return className;
    }
    function __wbg_adapter_36(arg0, arg1, arg2) {
        wasm.closure1314_externref_shim(arg0, arg1, arg2);
    }

    function takeFromExternrefTable0(idx) {
        const value = wasm.__wbindgen_export_1.get(idx);
        wasm.__externref_table_dealloc(idx);
        return value;
    }
    function __wbg_adapter_39(arg0, arg1) {
        const ret = wasm._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h260717876bd51fb8_multivalue_shim(arg0, arg1);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }

    function __wbg_adapter_44(arg0, arg1, arg2) {
        wasm.closure2259_externref_shim(arg0, arg1, arg2);
    }

    function __wbg_adapter_1434(arg0, arg1, arg2, arg3) {
        wasm.closure4228_externref_shim(arg0, arg1, arg2, arg3);
    }

    const __wbindgen_enum_GpuAddressMode = ["clamp-to-edge", "repeat", "mirror-repeat"];

    const __wbindgen_enum_GpuBlendFactor = ["zero", "one", "src", "one-minus-src", "src-alpha", "one-minus-src-alpha", "dst", "one-minus-dst", "dst-alpha", "one-minus-dst-alpha", "src-alpha-saturated", "constant", "one-minus-constant", "src1", "one-minus-src1", "src1-alpha", "one-minus-src1-alpha"];

    const __wbindgen_enum_GpuBlendOperation = ["add", "subtract", "reverse-subtract", "min", "max"];

    const __wbindgen_enum_GpuBufferBindingType = ["uniform", "storage", "read-only-storage"];

    const __wbindgen_enum_GpuCanvasAlphaMode = ["opaque", "premultiplied"];

    const __wbindgen_enum_GpuCompareFunction = ["never", "less", "equal", "less-equal", "greater", "not-equal", "greater-equal", "always"];

    const __wbindgen_enum_GpuCullMode = ["none", "front", "back"];

    const __wbindgen_enum_GpuFilterMode = ["nearest", "linear"];

    const __wbindgen_enum_GpuFrontFace = ["ccw", "cw"];

    const __wbindgen_enum_GpuIndexFormat = ["uint16", "uint32"];

    const __wbindgen_enum_GpuLoadOp = ["load", "clear"];

    const __wbindgen_enum_GpuMipmapFilterMode = ["nearest", "linear"];

    const __wbindgen_enum_GpuPowerPreference = ["low-power", "high-performance"];

    const __wbindgen_enum_GpuPrimitiveTopology = ["point-list", "line-list", "line-strip", "triangle-list", "triangle-strip"];

    const __wbindgen_enum_GpuSamplerBindingType = ["filtering", "non-filtering", "comparison"];

    const __wbindgen_enum_GpuStencilOperation = ["keep", "zero", "replace", "invert", "increment-clamp", "decrement-clamp", "increment-wrap", "decrement-wrap"];

    const __wbindgen_enum_GpuStorageTextureAccess = ["write-only", "read-only", "read-write"];

    const __wbindgen_enum_GpuStoreOp = ["store", "discard"];

    const __wbindgen_enum_GpuTextureAspect = ["all", "stencil-only", "depth-only"];

    const __wbindgen_enum_GpuTextureDimension = ["1d", "2d", "3d"];

    const __wbindgen_enum_GpuTextureFormat = ["r8unorm", "r8snorm", "r8uint", "r8sint", "r16uint", "r16sint", "r16float", "rg8unorm", "rg8snorm", "rg8uint", "rg8sint", "r32uint", "r32sint", "r32float", "rg16uint", "rg16sint", "rg16float", "rgba8unorm", "rgba8unorm-srgb", "rgba8snorm", "rgba8uint", "rgba8sint", "bgra8unorm", "bgra8unorm-srgb", "rgb9e5ufloat", "rgb10a2uint", "rgb10a2unorm", "rg11b10ufloat", "rg32uint", "rg32sint", "rg32float", "rgba16uint", "rgba16sint", "rgba16float", "rgba32uint", "rgba32sint", "rgba32float", "stencil8", "depth16unorm", "depth24plus", "depth24plus-stencil8", "depth32float", "depth32float-stencil8", "bc1-rgba-unorm", "bc1-rgba-unorm-srgb", "bc2-rgba-unorm", "bc2-rgba-unorm-srgb", "bc3-rgba-unorm", "bc3-rgba-unorm-srgb", "bc4-r-unorm", "bc4-r-snorm", "bc5-rg-unorm", "bc5-rg-snorm", "bc6h-rgb-ufloat", "bc6h-rgb-float", "bc7-rgba-unorm", "bc7-rgba-unorm-srgb", "etc2-rgb8unorm", "etc2-rgb8unorm-srgb", "etc2-rgb8a1unorm", "etc2-rgb8a1unorm-srgb", "etc2-rgba8unorm", "etc2-rgba8unorm-srgb", "eac-r11unorm", "eac-r11snorm", "eac-rg11unorm", "eac-rg11snorm", "astc-4x4-unorm", "astc-4x4-unorm-srgb", "astc-5x4-unorm", "astc-5x4-unorm-srgb", "astc-5x5-unorm", "astc-5x5-unorm-srgb", "astc-6x5-unorm", "astc-6x5-unorm-srgb", "astc-6x6-unorm", "astc-6x6-unorm-srgb", "astc-8x5-unorm", "astc-8x5-unorm-srgb", "astc-8x6-unorm", "astc-8x6-unorm-srgb", "astc-8x8-unorm", "astc-8x8-unorm-srgb", "astc-10x5-unorm", "astc-10x5-unorm-srgb", "astc-10x6-unorm", "astc-10x6-unorm-srgb", "astc-10x8-unorm", "astc-10x8-unorm-srgb", "astc-10x10-unorm", "astc-10x10-unorm-srgb", "astc-12x10-unorm", "astc-12x10-unorm-srgb", "astc-12x12-unorm", "astc-12x12-unorm-srgb"];

    const __wbindgen_enum_GpuTextureSampleType = ["float", "unfilterable-float", "depth", "sint", "uint"];

    const __wbindgen_enum_GpuTextureViewDimension = ["1d", "2d", "2d-array", "cube", "cube-array", "3d"];

    const __wbindgen_enum_GpuVertexFormat = ["uint8", "uint8x2", "uint8x4", "sint8", "sint8x2", "sint8x4", "unorm8", "unorm8x2", "unorm8x4", "snorm8", "snorm8x2", "snorm8x4", "uint16", "uint16x2", "uint16x4", "sint16", "sint16x2", "sint16x4", "unorm16", "unorm16x2", "unorm16x4", "snorm16", "snorm16x2", "snorm16x4", "float16", "float16x2", "float16x4", "float32", "float32x2", "float32x3", "float32x4", "uint32", "uint32x2", "uint32x3", "uint32x4", "sint32", "sint32x2", "sint32x3", "sint32x4", "unorm10-10-10-2", "unorm8x4-bgra"];

    const __wbindgen_enum_GpuVertexStepMode = ["vertex", "instance"];

    const __wbindgen_enum_RequestMode = ["same-origin", "no-cors", "cors", "navigate"];

    const __wbindgen_enum_ResizeObserverBoxOptions = ["border-box", "content-box", "device-pixel-content-box"];

    const WebHandleFinalization = (typeof FinalizationRegistry === 'undefined')
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry(ptr => wasm.__wbg_webhandle_free(ptr >>> 0, 1));
    /**
     * Our handle to the web app from JavaScript.
     */
    class WebHandle {

        __destroy_into_raw() {
            const ptr = this.__wbg_ptr;
            this.__wbg_ptr = 0;
            WebHandleFinalization.unregister(this);
            return ptr;
        }

        free() {
            const ptr = this.__destroy_into_raw();
            wasm.__wbg_webhandle_free(ptr, 0);
        }
        /**
         * The JavaScript can check whether or not your app has crashed:
         * @returns {boolean}
         */
        has_panicked() {
            const ret = wasm.webhandle_has_panicked(this.__wbg_ptr);
            return ret !== 0;
        }
        /**
         * @returns {string | undefined}
         */
        panic_message() {
            const ret = wasm.webhandle_panic_message(this.__wbg_ptr);
            let v1;
            if (ret[0] !== 0) {
                v1 = getStringFromWasm0(ret[0], ret[1]).slice();
                wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
            }
            return v1;
        }
        /**
         * @returns {string | undefined}
         */
        panic_callstack() {
            const ret = wasm.webhandle_panic_callstack(this.__wbg_ptr);
            let v1;
            if (ret[0] !== 0) {
                v1 = getStringFromWasm0(ret[0], ret[1]).slice();
                wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
            }
            return v1;
        }
        /**
         * Installs a panic hook, then returns.
         */
        constructor() {
            const ret = wasm.webhandle_new();
            this.__wbg_ptr = ret >>> 0;
            WebHandleFinalization.register(this, this.__wbg_ptr, this);
            return this;
        }
        /**
         * Call this once from JavaScript to start your app.
         *
         * # Errors
         * Returns an error if the app could not start.
         * @param {HTMLCanvasElement} canvas
         * @returns {Promise<void>}
         */
        start(canvas) {
            const ret = wasm.webhandle_start(this.__wbg_ptr, canvas);
            return ret;
        }
        destroy() {
            wasm.webhandle_destroy(this.__wbg_ptr);
        }
        /**
         * Example on how to call into your app from JavaScript.
         */
        example() {
            wasm.webhandle_example(this.__wbg_ptr);
        }
    }
    __exports.WebHandle = WebHandle;

    async function __wbg_load(module, imports) {
        if (typeof Response === 'function' && module instanceof Response) {
            if (typeof WebAssembly.instantiateStreaming === 'function') {
                try {
                    return await WebAssembly.instantiateStreaming(module, imports);

                } catch (e) {
                    if (module.headers.get('Content-Type') != 'application/wasm') {
                        console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                    } else {
                        throw e;
                    }
                }
            }

            const bytes = await module.arrayBuffer();
            return await WebAssembly.instantiate(bytes, imports);

        } else {
            const instance = await WebAssembly.instantiate(module, imports);

            if (instance instanceof WebAssembly.Instance) {
                return { instance, module };

            } else {
                return instance;
            }
        }
    }

    function __wbg_get_imports() {
        const imports = {};
        imports.wbg = {};
        imports.wbg.__wbg_Window_7b2011a6368164ef = function(arg0) {
            const ret = arg0.Window;
            return ret;
        };
        imports.wbg.__wbg_WorkerGlobalScope_4bddbcb12b3f5a28 = function(arg0) {
            const ret = arg0.WorkerGlobalScope;
            return ret;
        };
        imports.wbg.__wbg_activeElement_367599fdfa7ad115 = function(arg0) {
            const ret = arg0.activeElement;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        };
        imports.wbg.__wbg_activeElement_7cabba30de7b6b67 = function(arg0) {
            const ret = arg0.activeElement;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        };
        imports.wbg.__wbg_activeTexture_0f19d8acfa0a14c2 = function(arg0, arg1) {
            arg0.activeTexture(arg1 >>> 0);
        };
        imports.wbg.__wbg_activeTexture_460f2e367e813fb0 = function(arg0, arg1) {
            arg0.activeTexture(arg1 >>> 0);
        };
        imports.wbg.__wbg_addEventListener_84ae3eac6e15480a = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.addEventListener(getStringFromWasm0(arg1, arg2), arg3, arg4);
        }, arguments) };
        imports.wbg.__wbg_altKey_c33c03aed82e4275 = function(arg0) {
            const ret = arg0.altKey;
            return ret;
        };
        imports.wbg.__wbg_altKey_d7495666df921121 = function(arg0) {
            const ret = arg0.altKey;
            return ret;
        };
        imports.wbg.__wbg_appendChild_8204974b7328bf98 = function() { return handleError(function (arg0, arg1) {
            const ret = arg0.appendChild(arg1);
            return ret;
        }, arguments) };
        imports.wbg.__wbg_arrayBuffer_d1b44c4390db422f = function() { return handleError(function (arg0) {
            const ret = arg0.arrayBuffer();
            return ret;
        }, arguments) };
        imports.wbg.__wbg_arrayBuffer_f18c144cd0125f07 = function(arg0) {
            const ret = arg0.arrayBuffer();
            return ret;
        };
        imports.wbg.__wbg_at_7d852dd9f194d43e = function(arg0, arg1) {
            const ret = arg0.at(arg1);
            return ret;
        };
        imports.wbg.__wbg_attachShader_3d4eb6af9e3e7bd1 = function(arg0, arg1, arg2) {
            arg0.attachShader(arg1, arg2);
        };
        imports.wbg.__wbg_attachShader_94e758c8b5283eb2 = function(arg0, arg1, arg2) {
            arg0.attachShader(arg1, arg2);
        };
        imports.wbg.__wbg_beginQuery_6af0b28414b16c07 = function(arg0, arg1, arg2) {
            arg0.beginQuery(arg1 >>> 0, arg2);
        };
        imports.wbg.__wbg_beginRenderPass_599b98d9a6ba5692 = function() { return handleError(function (arg0, arg1) {
            const ret = arg0.beginRenderPass(arg1);
            return ret;
        }, arguments) };
        imports.wbg.__wbg_bindAttribLocation_40da4b3e84cc7bd5 = function(arg0, arg1, arg2, arg3, arg4) {
            arg0.bindAttribLocation(arg1, arg2 >>> 0, getStringFromWasm0(arg3, arg4));
        };
        imports.wbg.__wbg_bindAttribLocation_ce2730e29976d230 = function(arg0, arg1, arg2, arg3, arg4) {
            arg0.bindAttribLocation(arg1, arg2 >>> 0, getStringFromWasm0(arg3, arg4));
        };
        imports.wbg.__wbg_bindBufferRange_454f90f2b1781982 = function(arg0, arg1, arg2, arg3, arg4, arg5) {
            arg0.bindBufferRange(arg1 >>> 0, arg2 >>> 0, arg3, arg4, arg5);
        };
        imports.wbg.__wbg_bindBuffer_309c9a6c21826cf5 = function(arg0, arg1, arg2) {
            arg0.bindBuffer(arg1 >>> 0, arg2);
        };
        imports.wbg.__wbg_bindBuffer_f32f587f1c2962a7 = function(arg0, arg1, arg2) {
            arg0.bindBuffer(arg1 >>> 0, arg2);
        };
        imports.wbg.__wbg_bindFramebuffer_bd02c8cc707d670f = function(arg0, arg1, arg2) {
            arg0.bindFramebuffer(arg1 >>> 0, arg2);
        };
        imports.wbg.__wbg_bindFramebuffer_e48e83c0f973944d = function(arg0, arg1, arg2) {
            arg0.bindFramebuffer(arg1 >>> 0, arg2);
        };
        imports.wbg.__wbg_bindRenderbuffer_53eedd88e52b4cb5 = function(arg0, arg1, arg2) {
            arg0.bindRenderbuffer(arg1 >>> 0, arg2);
        };
        imports.wbg.__wbg_bindRenderbuffer_55e205fecfddbb8c = function(arg0, arg1, arg2) {
            arg0.bindRenderbuffer(arg1 >>> 0, arg2);
        };
        imports.wbg.__wbg_bindSampler_9f59cf2eaa22eee0 = function(arg0, arg1, arg2) {
            arg0.bindSampler(arg1 >>> 0, arg2);
        };
        imports.wbg.__wbg_bindTexture_a6e795697f49ebd1 = function(arg0, arg1, arg2) {
            arg0.bindTexture(arg1 >>> 0, arg2);
        };
        imports.wbg.__wbg_bindTexture_bc8eb316247f739d = function(arg0, arg1, arg2) {
            arg0.bindTexture(arg1 >>> 0, arg2);
        };
        imports.wbg.__wbg_bindVertexArrayOES_da8e7059b789629e = function(arg0, arg1) {
            arg0.bindVertexArrayOES(arg1);
        };
        imports.wbg.__wbg_bindVertexArray_6b4b88581064b71f = function(arg0, arg1) {
            arg0.bindVertexArray(arg1);
        };
        imports.wbg.__wbg_blendColor_15ba1eff44560932 = function(arg0, arg1, arg2, arg3, arg4) {
            arg0.blendColor(arg1, arg2, arg3, arg4);
        };
        imports.wbg.__wbg_blendColor_6446fba673f64ff0 = function(arg0, arg1, arg2, arg3, arg4) {
            arg0.blendColor(arg1, arg2, arg3, arg4);
        };
        imports.wbg.__wbg_blendEquationSeparate_c1aa26a9a5c5267e = function(arg0, arg1, arg2) {
            arg0.blendEquationSeparate(arg1 >>> 0, arg2 >>> 0);
        };
        imports.wbg.__wbg_blendEquationSeparate_f3d422e981d86339 = function(arg0, arg1, arg2) {
            arg0.blendEquationSeparate(arg1 >>> 0, arg2 >>> 0);
        };
        imports.wbg.__wbg_blendEquation_c23d111ad6d268ff = function(arg0, arg1) {
            arg0.blendEquation(arg1 >>> 0);
        };
        imports.wbg.__wbg_blendEquation_cec7bc41f3e5704c = function(arg0, arg1) {
            arg0.blendEquation(arg1 >>> 0);
        };
        imports.wbg.__wbg_blendFuncSeparate_483be8d4dd635340 = function(arg0, arg1, arg2, arg3, arg4) {
            arg0.blendFuncSeparate(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
        };
        imports.wbg.__wbg_blendFuncSeparate_dafeabfc1680b2ee = function(arg0, arg1, arg2, arg3, arg4) {
            arg0.blendFuncSeparate(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
        };
        imports.wbg.__wbg_blendFunc_9454884a3cfd2911 = function(arg0, arg1, arg2) {
            arg0.blendFunc(arg1 >>> 0, arg2 >>> 0);
        };
        imports.wbg.__wbg_blendFunc_c3b74be5a39c665f = function(arg0, arg1, arg2) {
            arg0.blendFunc(arg1 >>> 0, arg2 >>> 0);
        };
        imports.wbg.__wbg_blitFramebuffer_7303bdff77cfe967 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
            arg0.blitFramebuffer(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10 >>> 0);
        };
        imports.wbg.__wbg_blockSize_1490803190b57a34 = function(arg0) {
            const ret = arg0.blockSize;
            return ret;
        };
        imports.wbg.__wbg_blur_c2ad8cc71bac3974 = function() { return handleError(function (arg0) {
            arg0.blur();
        }, arguments) };
        imports.wbg.__wbg_body_942ea927546a04ba = function(arg0) {
            const ret = arg0.body;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        };
        imports.wbg.__wbg_bottom_79b03e9c3d6f4e1e = function(arg0) {
            const ret = arg0.bottom;
            return ret;
        };
        imports.wbg.__wbg_bufferData_3261d3e1dd6fc903 = function(arg0, arg1, arg2, arg3) {
            arg0.bufferData(arg1 >>> 0, arg2, arg3 >>> 0);
        };
        imports.wbg.__wbg_bufferData_33c59bf909ea6fd3 = function(arg0, arg1, arg2, arg3) {
            arg0.bufferData(arg1 >>> 0, arg2, arg3 >>> 0);
        };
        imports.wbg.__wbg_bufferData_463178757784fcac = function(arg0, arg1, arg2, arg3) {
            arg0.bufferData(arg1 >>> 0, arg2, arg3 >>> 0);
        };
        imports.wbg.__wbg_bufferData_d99b6b4eb5283f20 = function(arg0, arg1, arg2, arg3) {
            arg0.bufferData(arg1 >>> 0, arg2, arg3 >>> 0);
        };
        imports.wbg.__wbg_bufferSubData_4e973eefe9236d04 = function(arg0, arg1, arg2, arg3) {
            arg0.bufferSubData(arg1 >>> 0, arg2, arg3);
        };
        imports.wbg.__wbg_bufferSubData_dcd4d16031a60345 = function(arg0, arg1, arg2, arg3) {
            arg0.bufferSubData(arg1 >>> 0, arg2, arg3);
        };
        imports.wbg.__wbg_buffer_09165b52af8c5237 = function(arg0) {
            const ret = arg0.buffer;
            return ret;
        };
        imports.wbg.__wbg_buffer_609cc3eee51ed158 = function(arg0) {
            const ret = arg0.buffer;
            return ret;
        };
        imports.wbg.__wbg_button_f75c56aec440ea04 = function(arg0) {
            const ret = arg0.button;
            return ret;
        };
        imports.wbg.__wbg_call_672a4d21634d4a24 = function() { return handleError(function (arg0, arg1) {
            const ret = arg0.call(arg1);
            return ret;
        }, arguments) };
        imports.wbg.__wbg_call_7cccdd69e0791ae2 = function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.call(arg1, arg2);
            return ret;
        }, arguments) };
        imports.wbg.__wbg_cancelAnimationFrame_089b48301c362fde = function() { return handleError(function (arg0, arg1) {
            arg0.cancelAnimationFrame(arg1);
        }, arguments) };
        imports.wbg.__wbg_cancel_ec9f8196f0b0eb21 = function(arg0) {
            arg0.cancel();
        };
        imports.wbg.__wbg_changedTouches_3654bea4294f2e86 = function(arg0) {
            const ret = arg0.changedTouches;
            return ret;
        };
        imports.wbg.__wbg_clearBufferfv_65ea413f7f2554a2 = function(arg0, arg1, arg2, arg3, arg4) {
            arg0.clearBufferfv(arg1 >>> 0, arg2, getArrayF32FromWasm0(arg3, arg4));
        };
        imports.wbg.__wbg_clearBufferiv_c003c27b77a0245b = function(arg0, arg1, arg2, arg3, arg4) {
            arg0.clearBufferiv(arg1 >>> 0, arg2, getArrayI32FromWasm0(arg3, arg4));
        };
        imports.wbg.__wbg_clearBufferuiv_8c285072f2026a37 = function(arg0, arg1, arg2, arg3, arg4) {
            arg0.clearBufferuiv(arg1 >>> 0, arg2, getArrayU32FromWasm0(arg3, arg4));
        };
        imports.wbg.__wbg_clearDepth_17cfee5be8476fae = function(arg0, arg1) {
            arg0.clearDepth(arg1);
        };
        imports.wbg.__wbg_clearDepth_670d19914a501259 = function(arg0, arg1) {
            arg0.clearDepth(arg1);
        };
        imports.wbg.__wbg_clearInterval_ad2594253cc39c4b = function(arg0, arg1) {
            arg0.clearInterval(arg1);
        };
        imports.wbg.__wbg_clearStencil_4323424f1acca0df = function(arg0, arg1) {
            arg0.clearStencil(arg1);
        };
        imports.wbg.__wbg_clearStencil_7addd3b330b56b27 = function(arg0, arg1) {
            arg0.clearStencil(arg1);
        };
        imports.wbg.__wbg_clear_62b9037b892f6988 = function(arg0, arg1) {
            arg0.clear(arg1 >>> 0);
        };
        imports.wbg.__wbg_clear_f8d5f3c348d37d95 = function(arg0, arg1) {
            arg0.clear(arg1 >>> 0);
        };
        imports.wbg.__wbg_clientWaitSync_6930890a42bd44c0 = function(arg0, arg1, arg2, arg3) {
            const ret = arg0.clientWaitSync(arg1, arg2 >>> 0, arg3 >>> 0);
            return ret;
        };
        imports.wbg.__wbg_clientX_5eb380a5f1fec6fd = function(arg0) {
            const ret = arg0.clientX;
            return ret;
        };
        imports.wbg.__wbg_clientX_687c1a16e03e1f58 = function(arg0) {
            const ret = arg0.clientX;
            return ret;
        };
        imports.wbg.__wbg_clientY_78d0605ac74642c2 = function(arg0) {
            const ret = arg0.clientY;
            return ret;
        };
        imports.wbg.__wbg_clientY_d8b9c7f0c4e2e677 = function(arg0) {
            const ret = arg0.clientY;
            return ret;
        };
        imports.wbg.__wbg_clipboardData_04bd9c1b0935d7e6 = function(arg0) {
            const ret = arg0.clipboardData;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        };
        imports.wbg.__wbg_clipboard_93f8aa8cc426db44 = function(arg0) {
            const ret = arg0.clipboard;
            return ret;
        };
        imports.wbg.__wbg_colorMask_5e7c60b9c7a57a2e = function(arg0, arg1, arg2, arg3, arg4) {
            arg0.colorMask(arg1 !== 0, arg2 !== 0, arg3 !== 0, arg4 !== 0);
        };
        imports.wbg.__wbg_colorMask_6dac12039c7145ae = function(arg0, arg1, arg2, arg3, arg4) {
            arg0.colorMask(arg1 !== 0, arg2 !== 0, arg3 !== 0, arg4 !== 0);
        };
        imports.wbg.__wbg_compileShader_0ad770bbdbb9de21 = function(arg0, arg1) {
            arg0.compileShader(arg1);
        };
        imports.wbg.__wbg_compileShader_2307c9d370717dd5 = function(arg0, arg1) {
            arg0.compileShader(arg1);
        };
        imports.wbg.__wbg_compressedTexSubImage2D_71877eec950ca069 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
            arg0.compressedTexSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8, arg9);
        };
        imports.wbg.__wbg_compressedTexSubImage2D_99abf4cfdb7c3fd8 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
            arg0.compressedTexSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8);
        };
        imports.wbg.__wbg_compressedTexSubImage2D_d66dcfcb2422e703 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
            arg0.compressedTexSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8);
        };
        imports.wbg.__wbg_compressedTexSubImage3D_58506392da46b927 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
            arg0.compressedTexSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10);
        };
        imports.wbg.__wbg_compressedTexSubImage3D_81477746675a4017 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
            arg0.compressedTexSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10, arg11);
        };
        imports.wbg.__wbg_configure_bee5e0250d8526d5 = function() { return handleError(function (arg0, arg1) {
            arg0.configure(arg1);
        }, arguments) };
        imports.wbg.__wbg_contentBoxSize_638692469db816f2 = function(arg0) {
            const ret = arg0.contentBoxSize;
            return ret;
        };
        imports.wbg.__wbg_contentRect_81407eb60e52248f = function(arg0) {
            const ret = arg0.contentRect;
            return ret;
        };
        imports.wbg.__wbg_copyBufferSubData_9469a965478e33b5 = function(arg0, arg1, arg2, arg3, arg4, arg5) {
            arg0.copyBufferSubData(arg1 >>> 0, arg2 >>> 0, arg3, arg4, arg5);
        };
        imports.wbg.__wbg_copyTexSubImage2D_05e7e8df6814a705 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
            arg0.copyTexSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8);
        };
        imports.wbg.__wbg_copyTexSubImage2D_607ad28606952982 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
            arg0.copyTexSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8);
        };
        imports.wbg.__wbg_copyTexSubImage3D_32e92c94044e58ca = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
            arg0.copyTexSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9);
        };
        imports.wbg.__wbg_copyTextureToBuffer_d24dda6fabc7ee56 = function() { return handleError(function (arg0, arg1, arg2, arg3) {
            arg0.copyTextureToBuffer(arg1, arg2, arg3);
        }, arguments) };
        imports.wbg.__wbg_createBindGroupLayout_f543b79f894eed2e = function() { return handleError(function (arg0, arg1) {
            const ret = arg0.createBindGroupLayout(arg1);
            return ret;
        }, arguments) };
        imports.wbg.__wbg_createBindGroup_06db01d96df151a7 = function(arg0, arg1) {
            const ret = arg0.createBindGroup(arg1);
            return ret;
        };
        imports.wbg.__wbg_createBuffer_6e69283608e8f98f = function() { return handleError(function (arg0, arg1) {
            const ret = arg0.createBuffer(arg1);
            return ret;
        }, arguments) };
        imports.wbg.__wbg_createBuffer_7a9ec3d654073660 = function(arg0) {
            const ret = arg0.createBuffer();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        };
        imports.wbg.__wbg_createBuffer_9886e84a67b68c89 = function(arg0) {
            const ret = arg0.createBuffer();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        };
        imports.wbg.__wbg_createCommandEncoder_88e8ef64b19cdb2c = function(arg0, arg1) {
            const ret = arg0.createCommandEncoder(arg1);
            return ret;
        };
        imports.wbg.__wbg_createElement_8c9931a732ee2fea = function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.createElement(getStringFromWasm0(arg1, arg2));
            return ret;
        }, arguments) };
        imports.wbg.__wbg_createFramebuffer_7824f69bba778885 = function(arg0) {
            const ret = arg0.createFramebuffer();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        };
        imports.wbg.__wbg_createFramebuffer_c8d70ebc4858051e = function(arg0) {
            const ret = arg0.createFramebuffer();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        };
        imports.wbg.__wbg_createPipelineLayout_0f960a922b66be56 = function(arg0, arg1) {
            const ret = arg0.createPipelineLayout(arg1);
            return ret;
        };
        imports.wbg.__wbg_createProgram_8ff56c485f3233d0 = function(arg0) {
            const ret = arg0.createProgram();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        };
        imports.wbg.__wbg_createProgram_da203074cafb1038 = function(arg0) {
            const ret = arg0.createProgram();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        };
        imports.wbg.__wbg_createQuery_5ed5e770ec1009c1 = function(arg0) {
            const ret = arg0.createQuery();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        };
        imports.wbg.__wbg_createRenderPipeline_725209221f17f288 = function() { return handleError(function (arg0, arg1) {
            const ret = arg0.createRenderPipeline(arg1);
            return ret;
        }, arguments) };
        imports.wbg.__wbg_createRenderbuffer_d88aa9403faa38ea = function(arg0) {
            const ret = arg0.createRenderbuffer();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        };
        imports.wbg.__wbg_createRenderbuffer_fd347ae14f262eaa = function(arg0) {
            const ret = arg0.createRenderbuffer();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        };
        imports.wbg.__wbg_createSampler_36aca895fb724d8b = function(arg0, arg1) {
            const ret = arg0.createSampler(arg1);
            return ret;
        };
        imports.wbg.__wbg_createSampler_f76e29d7522bec9e = function(arg0) {
            const ret = arg0.createSampler();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        };
        imports.wbg.__wbg_createShaderModule_714b17aece65828e = function(arg0, arg1) {
            const ret = arg0.createShaderModule(arg1);
            return ret;
        };
        imports.wbg.__wbg_createShader_4a256a8cc9c1ce4f = function(arg0, arg1) {
            const ret = arg0.createShader(arg1 >>> 0);
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        };
        imports.wbg.__wbg_createShader_983150fb1243ee56 = function(arg0, arg1) {
            const ret = arg0.createShader(arg1 >>> 0);
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        };
        imports.wbg.__wbg_createTexture_63195fd0d63c3a24 = function() { return handleError(function (arg0, arg1) {
            const ret = arg0.createTexture(arg1);
            return ret;
        }, arguments) };
        imports.wbg.__wbg_createTexture_9c536c79b635fdef = function(arg0) {
            const ret = arg0.createTexture();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        };
        imports.wbg.__wbg_createTexture_bfaa54c0cd22e367 = function(arg0) {
            const ret = arg0.createTexture();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        };
        imports.wbg.__wbg_createVertexArrayOES_991b44f100f93329 = function(arg0) {
            const ret = arg0.createVertexArrayOES();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        };
        imports.wbg.__wbg_createVertexArray_e435029ae2660efd = function(arg0) {
            const ret = arg0.createVertexArray();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        };
        imports.wbg.__wbg_createView_79f49fbd3fb5f94f = function() { return handleError(function (arg0, arg1) {
            const ret = arg0.createView(arg1);
            return ret;
        }, arguments) };
        imports.wbg.__wbg_ctrlKey_1e826e468105ac11 = function(arg0) {
            const ret = arg0.ctrlKey;
            return ret;
        };
        imports.wbg.__wbg_ctrlKey_cdbe8154dfb00d1f = function(arg0) {
            const ret = arg0.ctrlKey;
            return ret;
        };
        imports.wbg.__wbg_cullFace_187079e6e20a464d = function(arg0, arg1) {
            arg0.cullFace(arg1 >>> 0);
        };
        imports.wbg.__wbg_cullFace_fbae6dd4d5e61ba4 = function(arg0, arg1) {
            arg0.cullFace(arg1 >>> 0);
        };
        imports.wbg.__wbg_dataTransfer_86283b0702a1aff1 = function(arg0) {
            const ret = arg0.dataTransfer;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        };
        imports.wbg.__wbg_data_e77bd5c125ecc8a8 = function(arg0, arg1) {
            const ret = arg1.data;
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        };
        imports.wbg.__wbg_debug_21bee8b7f5110d62 = function(arg0, arg1) {
            console.debug(getStringFromWasm0(arg0, arg1));
        };
        imports.wbg.__wbg_deleteBuffer_7ed96e1bf7c02e87 = function(arg0, arg1) {
            arg0.deleteBuffer(arg1);
        };
        imports.wbg.__wbg_deleteBuffer_a7822433fc95dfb8 = function(arg0, arg1) {
            arg0.deleteBuffer(arg1);
        };
        imports.wbg.__wbg_deleteFramebuffer_66853fb7101488cb = function(arg0, arg1) {
            arg0.deleteFramebuffer(arg1);
        };
        imports.wbg.__wbg_deleteFramebuffer_cd3285ee5a702a7a = function(arg0, arg1) {
            arg0.deleteFramebuffer(arg1);
        };
        imports.wbg.__wbg_deleteProgram_3fa626bbc0001eb7 = function(arg0, arg1) {
            arg0.deleteProgram(arg1);
        };
        imports.wbg.__wbg_deleteProgram_71a133c6d053e272 = function(arg0, arg1) {
            arg0.deleteProgram(arg1);
        };
        imports.wbg.__wbg_deleteQuery_6a2b7cd30074b20b = function(arg0, arg1) {
            arg0.deleteQuery(arg1);
        };
        imports.wbg.__wbg_deleteRenderbuffer_59f4369653485031 = function(arg0, arg1) {
            arg0.deleteRenderbuffer(arg1);
        };
        imports.wbg.__wbg_deleteRenderbuffer_8808192853211567 = function(arg0, arg1) {
            arg0.deleteRenderbuffer(arg1);
        };
        imports.wbg.__wbg_deleteSampler_7f02bb003ba547f0 = function(arg0, arg1) {
            arg0.deleteSampler(arg1);
        };
        imports.wbg.__wbg_deleteShader_8d42f169deda58ac = function(arg0, arg1) {
            arg0.deleteShader(arg1);
        };
        imports.wbg.__wbg_deleteShader_c65a44796c5004d8 = function(arg0, arg1) {
            arg0.deleteShader(arg1);
        };
        imports.wbg.__wbg_deleteSync_5a3fbe5d6b742398 = function(arg0, arg1) {
            arg0.deleteSync(arg1);
        };
        imports.wbg.__wbg_deleteTexture_a30f5ca0163c4110 = function(arg0, arg1) {
            arg0.deleteTexture(arg1);
        };
        imports.wbg.__wbg_deleteTexture_bb82c9fec34372ba = function(arg0, arg1) {
            arg0.deleteTexture(arg1);
        };
        imports.wbg.__wbg_deleteVertexArrayOES_1ee7a06a4b23ec8c = function(arg0, arg1) {
            arg0.deleteVertexArrayOES(arg1);
        };
        imports.wbg.__wbg_deleteVertexArray_77fe73664a3332ae = function(arg0, arg1) {
            arg0.deleteVertexArray(arg1);
        };
        imports.wbg.__wbg_deltaMode_9bfd9fe3f6b4b240 = function(arg0) {
            const ret = arg0.deltaMode;
            return ret;
        };
        imports.wbg.__wbg_deltaX_5c1121715746e4b7 = function(arg0) {
            const ret = arg0.deltaX;
            return ret;
        };
        imports.wbg.__wbg_deltaY_f9318542caea0c36 = function(arg0) {
            const ret = arg0.deltaY;
            return ret;
        };
        imports.wbg.__wbg_depthFunc_2906916f4536d5d7 = function(arg0, arg1) {
            arg0.depthFunc(arg1 >>> 0);
        };
        imports.wbg.__wbg_depthFunc_f34449ae87cc4e3e = function(arg0, arg1) {
            arg0.depthFunc(arg1 >>> 0);
        };
        imports.wbg.__wbg_depthMask_5fe84e2801488eda = function(arg0, arg1) {
            arg0.depthMask(arg1 !== 0);
        };
        imports.wbg.__wbg_depthMask_76688a8638b2f321 = function(arg0, arg1) {
            arg0.depthMask(arg1 !== 0);
        };
        imports.wbg.__wbg_depthRange_3cd6b4dc961d9116 = function(arg0, arg1, arg2) {
            arg0.depthRange(arg1, arg2);
        };
        imports.wbg.__wbg_depthRange_f9c084ff3d81fd7b = function(arg0, arg1, arg2) {
            arg0.depthRange(arg1, arg2);
        };
        imports.wbg.__wbg_destroy_7602e890b930bb90 = function(arg0) {
            arg0.destroy();
        };
        imports.wbg.__wbg_destroy_9155d0887cf67205 = function(arg0) {
            arg0.destroy();
        };
        imports.wbg.__wbg_devicePixelContentBoxSize_a6de82cb30d70825 = function(arg0) {
            const ret = arg0.devicePixelContentBoxSize;
            return ret;
        };
        imports.wbg.__wbg_devicePixelRatio_68c391265f05d093 = function(arg0) {
            const ret = arg0.devicePixelRatio;
            return ret;
        };
        imports.wbg.__wbg_disableVertexAttribArray_452cc9815fced7e4 = function(arg0, arg1) {
            arg0.disableVertexAttribArray(arg1 >>> 0);
        };
        imports.wbg.__wbg_disableVertexAttribArray_afd097fb465dc100 = function(arg0, arg1) {
            arg0.disableVertexAttribArray(arg1 >>> 0);
        };
        imports.wbg.__wbg_disable_2702df5b5da5dd21 = function(arg0, arg1) {
            arg0.disable(arg1 >>> 0);
        };
        imports.wbg.__wbg_disable_8b53998501a7a85b = function(arg0, arg1) {
            arg0.disable(arg1 >>> 0);
        };
        imports.wbg.__wbg_disconnect_ac3f4ba550970c76 = function(arg0) {
            arg0.disconnect();
        };
        imports.wbg.__wbg_document_d249400bd7bd996d = function(arg0) {
            const ret = arg0.document;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        };
        imports.wbg.__wbg_done_769e5ede4b31c67b = function(arg0) {
            const ret = arg0.done;
            return ret;
        };
        imports.wbg.__wbg_drawArraysInstancedANGLE_342ee6b5236d9702 = function(arg0, arg1, arg2, arg3, arg4) {
            arg0.drawArraysInstancedANGLE(arg1 >>> 0, arg2, arg3, arg4);
        };
        imports.wbg.__wbg_drawArraysInstanced_622ea9f149b0b80c = function(arg0, arg1, arg2, arg3, arg4) {
            arg0.drawArraysInstanced(arg1 >>> 0, arg2, arg3, arg4);
        };
        imports.wbg.__wbg_drawArrays_6acaa2669c105f3a = function(arg0, arg1, arg2, arg3) {
            arg0.drawArrays(arg1 >>> 0, arg2, arg3);
        };
        imports.wbg.__wbg_drawArrays_6d29ea2ebc0c72a2 = function(arg0, arg1, arg2, arg3) {
            arg0.drawArrays(arg1 >>> 0, arg2, arg3);
        };
        imports.wbg.__wbg_drawBuffersWEBGL_9fdbdf3d4cbd3aae = function(arg0, arg1) {
            arg0.drawBuffersWEBGL(arg1);
        };
        imports.wbg.__wbg_drawBuffers_e729b75c5a50d760 = function(arg0, arg1) {
            arg0.drawBuffers(arg1);
        };
        imports.wbg.__wbg_drawElementsInstancedANGLE_096b48ab8686c5cf = function(arg0, arg1, arg2, arg3, arg4, arg5) {
            arg0.drawElementsInstancedANGLE(arg1 >>> 0, arg2, arg3 >>> 0, arg4, arg5);
        };
        imports.wbg.__wbg_drawElementsInstanced_f874e87d0b4e95e9 = function(arg0, arg1, arg2, arg3, arg4, arg5) {
            arg0.drawElementsInstanced(arg1 >>> 0, arg2, arg3 >>> 0, arg4, arg5);
        };
        imports.wbg.__wbg_drawIndexed_c47b56e3bafadecb = function(arg0, arg1, arg2, arg3, arg4, arg5) {
            arg0.drawIndexed(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4, arg5 >>> 0);
        };
        imports.wbg.__wbg_draw_3f782f0d09a907da = function(arg0, arg1, arg2, arg3, arg4) {
            arg0.draw(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
        };
        imports.wbg.__wbg_elementFromPoint_be6286b8ec1ae1a2 = function(arg0, arg1, arg2) {
            const ret = arg0.elementFromPoint(arg1, arg2);
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        };
        imports.wbg.__wbg_elementFromPoint_e788840a5168e09e = function(arg0, arg1, arg2) {
            const ret = arg0.elementFromPoint(arg1, arg2);
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        };
        imports.wbg.__wbg_enableVertexAttribArray_607be07574298e5e = function(arg0, arg1) {
            arg0.enableVertexAttribArray(arg1 >>> 0);
        };
        imports.wbg.__wbg_enableVertexAttribArray_93c3d406a41ad6c7 = function(arg0, arg1) {
            arg0.enableVertexAttribArray(arg1 >>> 0);
        };
        imports.wbg.__wbg_enable_51114837e05ee280 = function(arg0, arg1) {
            arg0.enable(arg1 >>> 0);
        };
        imports.wbg.__wbg_enable_d183fef39258803f = function(arg0, arg1) {
            arg0.enable(arg1 >>> 0);
        };
        imports.wbg.__wbg_endQuery_17aac36532ca7d47 = function(arg0, arg1) {
            arg0.endQuery(arg1 >>> 0);
        };
        imports.wbg.__wbg_end_8bb194afb9988691 = function(arg0) {
            arg0.end();
        };
        imports.wbg.__wbg_error_524f506f44df1645 = function(arg0) {
            console.error(arg0);
        };
        imports.wbg.__wbg_error_541113e32ba1ecbd = function(arg0, arg1) {
            let deferred0_0;
            let deferred0_1;
            try {
                deferred0_0 = arg0;
                deferred0_1 = arg1;
                console.error(getStringFromWasm0(arg0, arg1));
            } finally {
                wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
            }
        };
        imports.wbg.__wbg_fenceSync_02d142d21e315da6 = function(arg0, arg1, arg2) {
            const ret = arg0.fenceSync(arg1 >>> 0, arg2 >>> 0);
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        };
        imports.wbg.__wbg_fetch_c7cf5ae5e39ce3a5 = function(arg0) {
            const ret = fetch(arg0);
            return ret;
        };
        imports.wbg.__wbg_files_5f07ac9b6f9116a7 = function(arg0) {
            const ret = arg0.files;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        };
        imports.wbg.__wbg_finish_08e2d7b08c066b25 = function(arg0, arg1) {
            const ret = arg0.finish(arg1);
            return ret;
        };
        imports.wbg.__wbg_finish_5ebfba3167b3092c = function(arg0) {
            const ret = arg0.finish();
            return ret;
        };
        imports.wbg.__wbg_flush_4150080f65c49208 = function(arg0) {
            arg0.flush();
        };
        imports.wbg.__wbg_flush_987c35de09e06fd6 = function(arg0) {
            arg0.flush();
        };
        imports.wbg.__wbg_focus_7d08b55eba7b368d = function() { return handleError(function (arg0) {
            arg0.focus();
        }, arguments) };
        imports.wbg.__wbg_force_6e5acfdea2af0a4f = function(arg0) {
            const ret = arg0.force;
            return ret;
        };
        imports.wbg.__wbg_framebufferRenderbuffer_2fdd12e89ad81eb9 = function(arg0, arg1, arg2, arg3, arg4) {
            arg0.framebufferRenderbuffer(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4);
        };
        imports.wbg.__wbg_framebufferRenderbuffer_8b88592753b54715 = function(arg0, arg1, arg2, arg3, arg4) {
            arg0.framebufferRenderbuffer(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4);
        };
        imports.wbg.__wbg_framebufferTexture2D_81a565732bd5d8fe = function(arg0, arg1, arg2, arg3, arg4, arg5) {
            arg0.framebufferTexture2D(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4, arg5);
        };
        imports.wbg.__wbg_framebufferTexture2D_ed855d0b097c557a = function(arg0, arg1, arg2, arg3, arg4, arg5) {
            arg0.framebufferTexture2D(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4, arg5);
        };
        imports.wbg.__wbg_framebufferTextureLayer_5e6bd1b0cb45d815 = function(arg0, arg1, arg2, arg3, arg4, arg5) {
            arg0.framebufferTextureLayer(arg1 >>> 0, arg2 >>> 0, arg3, arg4, arg5);
        };
        imports.wbg.__wbg_framebufferTextureMultiviewOVR_e54f936c3cc382cb = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
            arg0.framebufferTextureMultiviewOVR(arg1 >>> 0, arg2 >>> 0, arg3, arg4, arg5, arg6);
        };
        imports.wbg.__wbg_frontFace_289c9d7a8569c4f2 = function(arg0, arg1) {
            arg0.frontFace(arg1 >>> 0);
        };
        imports.wbg.__wbg_frontFace_4d4936cfaeb8b7df = function(arg0, arg1) {
            arg0.frontFace(arg1 >>> 0);
        };
        imports.wbg.__wbg_getBindGroupLayout_2ffe3757a423ea39 = function(arg0, arg1) {
            const ret = arg0.getBindGroupLayout(arg1 >>> 0);
            return ret;
        };
        imports.wbg.__wbg_getBoundingClientRect_9073b0ff7574d76b = function(arg0) {
            const ret = arg0.getBoundingClientRect();
            return ret;
        };
        imports.wbg.__wbg_getBufferSubData_8ab2dcc5fcf5770f = function(arg0, arg1, arg2, arg3) {
            arg0.getBufferSubData(arg1 >>> 0, arg2, arg3);
        };
        imports.wbg.__wbg_getComputedStyle_046dd6472f8e7f1d = function() { return handleError(function (arg0, arg1) {
            const ret = arg0.getComputedStyle(arg1);
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments) };
        imports.wbg.__wbg_getContext_3ae09aaa73194801 = function() { return handleError(function (arg0, arg1, arg2, arg3) {
            const ret = arg0.getContext(getStringFromWasm0(arg1, arg2), arg3);
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments) };
        imports.wbg.__wbg_getContext_e9cf379449413580 = function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.getContext(getStringFromWasm0(arg1, arg2));
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments) };
        imports.wbg.__wbg_getContext_f65a0debd1e8f8e8 = function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.getContext(getStringFromWasm0(arg1, arg2));
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments) };
        imports.wbg.__wbg_getContext_fc19859df6331073 = function() { return handleError(function (arg0, arg1, arg2, arg3) {
            const ret = arg0.getContext(getStringFromWasm0(arg1, arg2), arg3);
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments) };
        imports.wbg.__wbg_getCurrentTexture_6dc4d0ea8555e374 = function() { return handleError(function (arg0) {
            const ret = arg0.getCurrentTexture();
            return ret;
        }, arguments) };
        imports.wbg.__wbg_getData_84cc441a50843727 = function() { return handleError(function (arg0, arg1, arg2, arg3) {
            const ret = arg1.getData(getStringFromWasm0(arg2, arg3));
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments) };
        imports.wbg.__wbg_getExtension_ff0fb1398bcf28c3 = function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.getExtension(getStringFromWasm0(arg1, arg2));
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments) };
        imports.wbg.__wbg_getIndexedParameter_f9211edc36533919 = function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.getIndexedParameter(arg1 >>> 0, arg2 >>> 0);
            return ret;
        }, arguments) };
        imports.wbg.__wbg_getItem_17f98dee3b43fa7e = function() { return handleError(function (arg0, arg1, arg2, arg3) {
            const ret = arg1.getItem(getStringFromWasm0(arg2, arg3));
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments) };
        imports.wbg.__wbg_getMappedRange_3cb6354f7963e27e = function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.getMappedRange(arg1, arg2);
            return ret;
        }, arguments) };
        imports.wbg.__wbg_getParameter_1f0887a2b88e6d19 = function() { return handleError(function (arg0, arg1) {
            const ret = arg0.getParameter(arg1 >>> 0);
            return ret;
        }, arguments) };
        imports.wbg.__wbg_getParameter_e3429f024018310f = function() { return handleError(function (arg0, arg1) {
            const ret = arg0.getParameter(arg1 >>> 0);
            return ret;
        }, arguments) };
        imports.wbg.__wbg_getPreferredCanvasFormat_06854455b835cf40 = function(arg0) {
            const ret = arg0.getPreferredCanvasFormat();
            return (__wbindgen_enum_GpuTextureFormat.indexOf(ret) + 1 || 96) - 1;
        };
        imports.wbg.__wbg_getProgramInfoLog_631c180b1b21c8ed = function(arg0, arg1, arg2) {
            const ret = arg1.getProgramInfoLog(arg2);
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        };
        imports.wbg.__wbg_getProgramInfoLog_a998105a680059db = function(arg0, arg1, arg2) {
            const ret = arg1.getProgramInfoLog(arg2);
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        };
        imports.wbg.__wbg_getProgramParameter_0c411f0cd4185c5b = function(arg0, arg1, arg2) {
            const ret = arg0.getProgramParameter(arg1, arg2 >>> 0);
            return ret;
        };
        imports.wbg.__wbg_getProgramParameter_360f95ff07ac068d = function(arg0, arg1, arg2) {
            const ret = arg0.getProgramParameter(arg1, arg2 >>> 0);
            return ret;
        };
        imports.wbg.__wbg_getPropertyValue_e623c23a05dfb30c = function() { return handleError(function (arg0, arg1, arg2, arg3) {
            const ret = arg1.getPropertyValue(getStringFromWasm0(arg2, arg3));
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments) };
        imports.wbg.__wbg_getQueryParameter_8921497e1d1561c1 = function(arg0, arg1, arg2) {
            const ret = arg0.getQueryParameter(arg1, arg2 >>> 0);
            return ret;
        };
        imports.wbg.__wbg_getRootNode_f59bcfa355239af5 = function(arg0) {
            const ret = arg0.getRootNode();
            return ret;
        };
        imports.wbg.__wbg_getShaderInfoLog_7e7b38fb910ec534 = function(arg0, arg1, arg2) {
            const ret = arg1.getShaderInfoLog(arg2);
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        };
        imports.wbg.__wbg_getShaderInfoLog_f59c3112acc6e039 = function(arg0, arg1, arg2) {
            const ret = arg1.getShaderInfoLog(arg2);
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        };
        imports.wbg.__wbg_getShaderParameter_511b5f929074fa31 = function(arg0, arg1, arg2) {
            const ret = arg0.getShaderParameter(arg1, arg2 >>> 0);
            return ret;
        };
        imports.wbg.__wbg_getShaderParameter_6dbe0b8558dc41fd = function(arg0, arg1, arg2) {
            const ret = arg0.getShaderParameter(arg1, arg2 >>> 0);
            return ret;
        };
        imports.wbg.__wbg_getSupportedExtensions_8c007dbb54905635 = function(arg0) {
            const ret = arg0.getSupportedExtensions();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        };
        imports.wbg.__wbg_getSupportedProfiles_10d2a4d32a128384 = function(arg0) {
            const ret = arg0.getSupportedProfiles();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        };
        imports.wbg.__wbg_getSyncParameter_7cb8461f5891606c = function(arg0, arg1, arg2) {
            const ret = arg0.getSyncParameter(arg1, arg2 >>> 0);
            return ret;
        };
        imports.wbg.__wbg_getTime_46267b1c24877e30 = function(arg0) {
            const ret = arg0.getTime();
            return ret;
        };
        imports.wbg.__wbg_getTimezoneOffset_6b5752021c499c47 = function(arg0) {
            const ret = arg0.getTimezoneOffset();
            return ret;
        };
        imports.wbg.__wbg_getUniformBlockIndex_288fdc31528171ca = function(arg0, arg1, arg2, arg3) {
            const ret = arg0.getUniformBlockIndex(arg1, getStringFromWasm0(arg2, arg3));
            return ret;
        };
        imports.wbg.__wbg_getUniformLocation_657a2b6d102bd126 = function(arg0, arg1, arg2, arg3) {
            const ret = arg0.getUniformLocation(arg1, getStringFromWasm0(arg2, arg3));
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        };
        imports.wbg.__wbg_getUniformLocation_838363001c74dc21 = function(arg0, arg1, arg2, arg3) {
            const ret = arg0.getUniformLocation(arg1, getStringFromWasm0(arg2, arg3));
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        };
        imports.wbg.__wbg_get_3091cb4339203d1a = function(arg0, arg1) {
            const ret = arg0[arg1 >>> 0];
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        };
        imports.wbg.__wbg_get_4095561f3d5ec806 = function(arg0, arg1) {
            const ret = arg0[arg1 >>> 0];
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        };
        imports.wbg.__wbg_get_67b2ba62fc30de12 = function() { return handleError(function (arg0, arg1) {
            const ret = Reflect.get(arg0, arg1);
            return ret;
        }, arguments) };
        imports.wbg.__wbg_get_8edd839202d9f4db = function(arg0, arg1) {
            const ret = arg0[arg1 >>> 0];
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        };
        imports.wbg.__wbg_get_b9b93047fe3cf45b = function(arg0, arg1) {
            const ret = arg0[arg1 >>> 0];
            return ret;
        };
        imports.wbg.__wbg_get_e27dfaeb6f46bd45 = function(arg0, arg1) {
            const ret = arg0[arg1 >>> 0];
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        };
        imports.wbg.__wbg_gpu_653e59c6ae8028a8 = function(arg0) {
            const ret = arg0.gpu;
            return ret;
        };
        imports.wbg.__wbg_hash_dd4b49269c385c8a = function() { return handleError(function (arg0, arg1) {
            const ret = arg1.hash;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments) };
        imports.wbg.__wbg_headers_7852a8ea641c1379 = function(arg0) {
            const ret = arg0.headers;
            return ret;
        };
        imports.wbg.__wbg_headers_9cb51cfd2ac780a4 = function(arg0) {
            const ret = arg0.headers;
            return ret;
        };
        imports.wbg.__wbg_height_1f8226c8f6875110 = function(arg0) {
            const ret = arg0.height;
            return ret;
        };
        imports.wbg.__wbg_height_838cee19ba8597db = function(arg0) {
            const ret = arg0.height;
            return ret;
        };
        imports.wbg.__wbg_hidden_d5c02c79a2b77bb6 = function(arg0) {
            const ret = arg0.hidden;
            return ret;
        };
        imports.wbg.__wbg_host_9bd7b5dc07c48606 = function() { return handleError(function (arg0, arg1) {
            const ret = arg1.host;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments) };
        imports.wbg.__wbg_hostname_8d7204884eb7378b = function() { return handleError(function (arg0, arg1) {
            const ret = arg1.hostname;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments) };
        imports.wbg.__wbg_href_87d60a783a012377 = function() { return handleError(function (arg0, arg1) {
            const ret = arg1.href;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments) };
        imports.wbg.__wbg_id_c65402eae48fb242 = function(arg0, arg1) {
            const ret = arg1.id;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        };
        imports.wbg.__wbg_identifier_59e0705aef81ff93 = function(arg0) {
            const ret = arg0.identifier;
            return ret;
        };
        imports.wbg.__wbg_includes_937486a108ec147b = function(arg0, arg1, arg2) {
            const ret = arg0.includes(arg1, arg2);
            return ret;
        };
        imports.wbg.__wbg_info_2e7d618e9cb88d77 = function(arg0, arg1) {
            console.info(getStringFromWasm0(arg0, arg1));
        };
        imports.wbg.__wbg_inlineSize_8ff96b3ec1b24423 = function(arg0) {
            const ret = arg0.inlineSize;
            return ret;
        };
        imports.wbg.__wbg_instanceof_Document_917b7ac52e42682e = function(arg0) {
            let result;
            try {
                result = arg0 instanceof Document;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        };
        imports.wbg.__wbg_instanceof_Element_0af65443936d5154 = function(arg0) {
            let result;
            try {
                result = arg0 instanceof Element;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        };
        imports.wbg.__wbg_instanceof_GpuAdapter_b2c1300e425af95c = function(arg0) {
            let result;
            try {
                result = arg0 instanceof GPUAdapter;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        };
        imports.wbg.__wbg_instanceof_GpuCanvasContext_c9b75b4b7dc7555e = function(arg0) {
            let result;
            try {
                result = arg0 instanceof GPUCanvasContext;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        };
        imports.wbg.__wbg_instanceof_HtmlCanvasElement_2ea67072a7624ac5 = function(arg0) {
            let result;
            try {
                result = arg0 instanceof HTMLCanvasElement;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        };
        imports.wbg.__wbg_instanceof_HtmlElement_51378c201250b16c = function(arg0) {
            let result;
            try {
                result = arg0 instanceof HTMLElement;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        };
        imports.wbg.__wbg_instanceof_HtmlInputElement_12d71bf2d15dd19e = function(arg0) {
            let result;
            try {
                result = arg0 instanceof HTMLInputElement;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        };
        imports.wbg.__wbg_instanceof_ResizeObserverEntry_cb85a268a84783ba = function(arg0) {
            let result;
            try {
                result = arg0 instanceof ResizeObserverEntry;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        };
        imports.wbg.__wbg_instanceof_ResizeObserverSize_4138fd53d59e1653 = function(arg0) {
            let result;
            try {
                result = arg0 instanceof ResizeObserverSize;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        };
        imports.wbg.__wbg_instanceof_Response_f2cc20d9f7dfd644 = function(arg0) {
            let result;
            try {
                result = arg0 instanceof Response;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        };
        imports.wbg.__wbg_instanceof_ShadowRoot_726578bcd7fa418a = function(arg0) {
            let result;
            try {
                result = arg0 instanceof ShadowRoot;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        };
        imports.wbg.__wbg_instanceof_TypeError_896f9e5789610ec3 = function(arg0) {
            let result;
            try {
                result = arg0 instanceof TypeError;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        };
        imports.wbg.__wbg_instanceof_WebGl2RenderingContext_2b6045efeb76568d = function(arg0) {
            let result;
            try {
                result = arg0 instanceof WebGL2RenderingContext;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        };
        imports.wbg.__wbg_instanceof_Window_def73ea0955fc569 = function(arg0) {
            let result;
            try {
                result = arg0 instanceof Window;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        };
        imports.wbg.__wbg_invalidateFramebuffer_83f643d2a4936456 = function() { return handleError(function (arg0, arg1, arg2) {
            arg0.invalidateFramebuffer(arg1 >>> 0, arg2);
        }, arguments) };
        imports.wbg.__wbg_isComposing_36511555ff1869a4 = function(arg0) {
            const ret = arg0.isComposing;
            return ret;
        };
        imports.wbg.__wbg_isComposing_6e36768c82fd5a4f = function(arg0) {
            const ret = arg0.isComposing;
            return ret;
        };
        imports.wbg.__wbg_isSecureContext_aedcf3816338189a = function(arg0) {
            const ret = arg0.isSecureContext;
            return ret;
        };
        imports.wbg.__wbg_is_c7481c65e7e5df9e = function(arg0, arg1) {
            const ret = Object.is(arg0, arg1);
            return ret;
        };
        imports.wbg.__wbg_item_aea4b8432b5457be = function(arg0, arg1) {
            const ret = arg0.item(arg1 >>> 0);
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        };
        imports.wbg.__wbg_items_89c2afbece3a5d13 = function(arg0) {
            const ret = arg0.items;
            return ret;
        };
        imports.wbg.__wbg_iterator_9a24c88df860dc65 = function() {
            const ret = Symbol.iterator;
            return ret;
        };
        imports.wbg.__wbg_keyCode_237a8d1a040910b8 = function(arg0) {
            const ret = arg0.keyCode;
            return ret;
        };
        imports.wbg.__wbg_key_7b5c6cb539be8e13 = function(arg0, arg1) {
            const ret = arg1.key;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        };
        imports.wbg.__wbg_label_f279af9fe090b53f = function(arg0, arg1) {
            const ret = arg1.label;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        };
        imports.wbg.__wbg_lastModified_7a9e61b3961224b8 = function(arg0) {
            const ret = arg0.lastModified;
            return ret;
        };
        imports.wbg.__wbg_left_e46801720267b66d = function(arg0) {
            const ret = arg0.left;
            return ret;
        };
        imports.wbg.__wbg_length_1d5c829e9b2319d6 = function(arg0) {
            const ret = arg0.length;
            return ret;
        };
        imports.wbg.__wbg_length_802483321c8130cf = function(arg0) {
            const ret = arg0.length;
            return ret;
        };
        imports.wbg.__wbg_length_a446193dc22c12f8 = function(arg0) {
            const ret = arg0.length;
            return ret;
        };
        imports.wbg.__wbg_length_cfc862ec0ccc7ca0 = function(arg0) {
            const ret = arg0.length;
            return ret;
        };
        imports.wbg.__wbg_length_e2d2a49132c1b256 = function(arg0) {
            const ret = arg0.length;
            return ret;
        };
        imports.wbg.__wbg_limits_59402e6db2c6b230 = function(arg0) {
            const ret = arg0.limits;
            return ret;
        };
        imports.wbg.__wbg_linkProgram_067ee06739bdde81 = function(arg0, arg1) {
            arg0.linkProgram(arg1);
        };
        imports.wbg.__wbg_linkProgram_e002979fe36e5b2a = function(arg0, arg1) {
            arg0.linkProgram(arg1);
        };
        imports.wbg.__wbg_localStorage_1406c99c39728187 = function() { return handleError(function (arg0) {
            const ret = arg0.localStorage;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments) };
        imports.wbg.__wbg_location_350d99456c2f3693 = function(arg0) {
            const ret = arg0.location;
            return ret;
        };
        imports.wbg.__wbg_mapAsync_e89ffbd0722e6025 = function(arg0, arg1, arg2, arg3) {
            const ret = arg0.mapAsync(arg1 >>> 0, arg2, arg3);
            return ret;
        };
        imports.wbg.__wbg_matchMedia_bf8807a841d930c1 = function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.matchMedia(getStringFromWasm0(arg1, arg2));
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments) };
        imports.wbg.__wbg_matches_e9ca73fbf8a3a104 = function(arg0) {
            const ret = arg0.matches;
            return ret;
        };
        imports.wbg.__wbg_maxBindGroups_52e3144d1d4f3951 = function(arg0) {
            const ret = arg0.maxBindGroups;
            return ret;
        };
        imports.wbg.__wbg_maxBindingsPerBindGroup_8e383157db4cfd9d = function(arg0) {
            const ret = arg0.maxBindingsPerBindGroup;
            return ret;
        };
        imports.wbg.__wbg_maxBufferSize_4bed0deb2b5570bc = function(arg0) {
            const ret = arg0.maxBufferSize;
            return ret;
        };
        imports.wbg.__wbg_maxColorAttachmentBytesPerSample_2ded1d176129b49e = function(arg0) {
            const ret = arg0.maxColorAttachmentBytesPerSample;
            return ret;
        };
        imports.wbg.__wbg_maxColorAttachments_a363e1f84136b445 = function(arg0) {
            const ret = arg0.maxColorAttachments;
            return ret;
        };
        imports.wbg.__wbg_maxComputeInvocationsPerWorkgroup_8c8259a34a467300 = function(arg0) {
            const ret = arg0.maxComputeInvocationsPerWorkgroup;
            return ret;
        };
        imports.wbg.__wbg_maxComputeWorkgroupSizeX_6a123a5258a37c70 = function(arg0) {
            const ret = arg0.maxComputeWorkgroupSizeX;
            return ret;
        };
        imports.wbg.__wbg_maxComputeWorkgroupSizeY_212a6e863b315f06 = function(arg0) {
            const ret = arg0.maxComputeWorkgroupSizeY;
            return ret;
        };
        imports.wbg.__wbg_maxComputeWorkgroupSizeZ_53a8c06a42e0daa4 = function(arg0) {
            const ret = arg0.maxComputeWorkgroupSizeZ;
            return ret;
        };
        imports.wbg.__wbg_maxComputeWorkgroupStorageSize_0940bd6b70d5ee03 = function(arg0) {
            const ret = arg0.maxComputeWorkgroupStorageSize;
            return ret;
        };
        imports.wbg.__wbg_maxComputeWorkgroupsPerDimension_155968404880d2bc = function(arg0) {
            const ret = arg0.maxComputeWorkgroupsPerDimension;
            return ret;
        };
        imports.wbg.__wbg_maxDynamicStorageBuffersPerPipelineLayout_7d88fb9026cd8af3 = function(arg0) {
            const ret = arg0.maxDynamicStorageBuffersPerPipelineLayout;
            return ret;
        };
        imports.wbg.__wbg_maxDynamicUniformBuffersPerPipelineLayout_146ac1a721fbca9b = function(arg0) {
            const ret = arg0.maxDynamicUniformBuffersPerPipelineLayout;
            return ret;
        };
        imports.wbg.__wbg_maxSampledTexturesPerShaderStage_10ee96b97a701e05 = function(arg0) {
            const ret = arg0.maxSampledTexturesPerShaderStage;
            return ret;
        };
        imports.wbg.__wbg_maxSamplersPerShaderStage_7546a712e69839d0 = function(arg0) {
            const ret = arg0.maxSamplersPerShaderStage;
            return ret;
        };
        imports.wbg.__wbg_maxStorageBufferBindingSize_6f36ebfc9d4874d1 = function(arg0) {
            const ret = arg0.maxStorageBufferBindingSize;
            return ret;
        };
        imports.wbg.__wbg_maxStorageBuffersPerShaderStage_ad3988a66894ccd8 = function(arg0) {
            const ret = arg0.maxStorageBuffersPerShaderStage;
            return ret;
        };
        imports.wbg.__wbg_maxStorageTexturesPerShaderStage_3c4b0fd6cdb25d2f = function(arg0) {
            const ret = arg0.maxStorageTexturesPerShaderStage;
            return ret;
        };
        imports.wbg.__wbg_maxTextureArrayLayers_596c959454186b7e = function(arg0) {
            const ret = arg0.maxTextureArrayLayers;
            return ret;
        };
        imports.wbg.__wbg_maxTextureDimension1D_395c7225194787e6 = function(arg0) {
            const ret = arg0.maxTextureDimension1D;
            return ret;
        };
        imports.wbg.__wbg_maxTextureDimension2D_1c70c07372595733 = function(arg0) {
            const ret = arg0.maxTextureDimension2D;
            return ret;
        };
        imports.wbg.__wbg_maxTextureDimension3D_c2c0b973db2f7087 = function(arg0) {
            const ret = arg0.maxTextureDimension3D;
            return ret;
        };
        imports.wbg.__wbg_maxUniformBufferBindingSize_18e95cb371149021 = function(arg0) {
            const ret = arg0.maxUniformBufferBindingSize;
            return ret;
        };
        imports.wbg.__wbg_maxUniformBuffersPerShaderStage_e21721df6407d356 = function(arg0) {
            const ret = arg0.maxUniformBuffersPerShaderStage;
            return ret;
        };
        imports.wbg.__wbg_maxVertexAttributes_3685d049fb4b9557 = function(arg0) {
            const ret = arg0.maxVertexAttributes;
            return ret;
        };
        imports.wbg.__wbg_maxVertexBufferArrayStride_799ce7d416969442 = function(arg0) {
            const ret = arg0.maxVertexBufferArrayStride;
            return ret;
        };
        imports.wbg.__wbg_maxVertexBuffers_9e36c1cf99fac3d6 = function(arg0) {
            const ret = arg0.maxVertexBuffers;
            return ret;
        };
        imports.wbg.__wbg_metaKey_0b25f7848e014cc8 = function(arg0) {
            const ret = arg0.metaKey;
            return ret;
        };
        imports.wbg.__wbg_metaKey_e1dd47d709a80ce5 = function(arg0) {
            const ret = arg0.metaKey;
            return ret;
        };
        imports.wbg.__wbg_minStorageBufferOffsetAlignment_04598b6c2361de5d = function(arg0) {
            const ret = arg0.minStorageBufferOffsetAlignment;
            return ret;
        };
        imports.wbg.__wbg_minUniformBufferOffsetAlignment_0743900952f2cbce = function(arg0) {
            const ret = arg0.minUniformBufferOffsetAlignment;
            return ret;
        };
        imports.wbg.__wbg_name_28c43f147574bf08 = function(arg0, arg1) {
            const ret = arg1.name;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        };
        imports.wbg.__wbg_navigator_0a9bf1120e24fec2 = function(arg0) {
            const ret = arg0.navigator;
            return ret;
        };
        imports.wbg.__wbg_navigator_1577371c070c8947 = function(arg0) {
            const ret = arg0.navigator;
            return ret;
        };
        imports.wbg.__wbg_new0_f788a2397c7ca929 = function() {
            const ret = new Date();
            return ret;
        };
        imports.wbg.__wbg_new_23a2665fac83c611 = function(arg0, arg1) {
            try {
                var state0 = {a: arg0, b: arg1};
                var cb0 = (arg0, arg1) => {
                    const a = state0.a;
                    state0.a = 0;
                    try {
                        return __wbg_adapter_1434(a, state0.b, arg0, arg1);
                    } finally {
                        state0.a = a;
                    }
                };
                const ret = new Promise(cb0);
                return ret;
            } finally {
                state0.a = state0.b = 0;
            }
        };
        imports.wbg.__wbg_new_31a97dac4f10fab7 = function(arg0) {
            const ret = new Date(arg0);
            return ret;
        };
        imports.wbg.__wbg_new_358bba68c164c0c7 = function() {
            const ret = new Error();
            return ret;
        };
        imports.wbg.__wbg_new_405e22f390576ce2 = function() {
            const ret = new Object();
            return ret;
        };
        imports.wbg.__wbg_new_5f34cc0c99fcc488 = function() { return handleError(function (arg0) {
            const ret = new ResizeObserver(arg0);
            return ret;
        }, arguments) };
        imports.wbg.__wbg_new_78feb108b6472713 = function() {
            const ret = new Array();
            return ret;
        };
        imports.wbg.__wbg_new_a12002a7f91c75be = function(arg0) {
            const ret = new Uint8Array(arg0);
            return ret;
        };
        imports.wbg.__wbg_newnoargs_105ed471475aaf50 = function(arg0, arg1) {
            const ret = new Function(getStringFromWasm0(arg0, arg1));
            return ret;
        };
        imports.wbg.__wbg_newwithbyteoffsetandlength_840f3c038856d4e9 = function(arg0, arg1, arg2) {
            const ret = new Int8Array(arg0, arg1 >>> 0, arg2 >>> 0);
            return ret;
        };
        imports.wbg.__wbg_newwithbyteoffsetandlength_999332a180064b59 = function(arg0, arg1, arg2) {
            const ret = new Int32Array(arg0, arg1 >>> 0, arg2 >>> 0);
            return ret;
        };
        imports.wbg.__wbg_newwithbyteoffsetandlength_d4a86622320ea258 = function(arg0, arg1, arg2) {
            const ret = new Uint16Array(arg0, arg1 >>> 0, arg2 >>> 0);
            return ret;
        };
        imports.wbg.__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a = function(arg0, arg1, arg2) {
            const ret = new Uint8Array(arg0, arg1 >>> 0, arg2 >>> 0);
            return ret;
        };
        imports.wbg.__wbg_newwithbyteoffsetandlength_e6b7e69acd4c7354 = function(arg0, arg1, arg2) {
            const ret = new Float32Array(arg0, arg1 >>> 0, arg2 >>> 0);
            return ret;
        };
        imports.wbg.__wbg_newwithbyteoffsetandlength_f1dead44d1fc7212 = function(arg0, arg1, arg2) {
            const ret = new Uint32Array(arg0, arg1 >>> 0, arg2 >>> 0);
            return ret;
        };
        imports.wbg.__wbg_newwithbyteoffsetandlength_f254047f7e80e7ff = function(arg0, arg1, arg2) {
            const ret = new Int16Array(arg0, arg1 >>> 0, arg2 >>> 0);
            return ret;
        };
        imports.wbg.__wbg_newwithrecordfromstrtoblobpromise_53d3e3611a048f1e = function() { return handleError(function (arg0) {
            const ret = new ClipboardItem(arg0);
            return ret;
        }, arguments) };
        imports.wbg.__wbg_newwithstrandinit_06c535e0a867c635 = function() { return handleError(function (arg0, arg1, arg2) {
            const ret = new Request(getStringFromWasm0(arg0, arg1), arg2);
            return ret;
        }, arguments) };
        imports.wbg.__wbg_newwithtext_4beba0b832dd9cc1 = function() { return handleError(function (arg0, arg1) {
            const ret = new SpeechSynthesisUtterance(getStringFromWasm0(arg0, arg1));
            return ret;
        }, arguments) };
        imports.wbg.__wbg_newwithu8arraysequenceandoptions_068570c487f69127 = function() { return handleError(function (arg0, arg1) {
            const ret = new Blob(arg0, arg1);
            return ret;
        }, arguments) };
        imports.wbg.__wbg_next_25feadfc0913fea9 = function(arg0) {
            const ret = arg0.next;
            return ret;
        };
        imports.wbg.__wbg_next_6574e1a8a62d1055 = function() { return handleError(function (arg0) {
            const ret = arg0.next();
            return ret;
        }, arguments) };
        imports.wbg.__wbg_now_2c95c9de01293173 = function(arg0) {
            const ret = arg0.now();
            return ret;
        };
        imports.wbg.__wbg_now_d18023d54d4e5500 = function(arg0) {
            const ret = arg0.now();
            return ret;
        };
        imports.wbg.__wbg_observe_ed4adb1c245103c5 = function(arg0, arg1, arg2) {
            arg0.observe(arg1, arg2);
        };
        imports.wbg.__wbg_of_2eaf5a02d443ef03 = function(arg0) {
            const ret = Array.of(arg0);
            return ret;
        };
        imports.wbg.__wbg_offsetTop_de8d0722bd1b211d = function(arg0) {
            const ret = arg0.offsetTop;
            return ret;
        };
        imports.wbg.__wbg_ok_3aaf32d069979723 = function(arg0) {
            const ret = arg0.ok;
            return ret;
        };
        imports.wbg.__wbg_onSubmittedWorkDone_babe5ab237e856ff = function(arg0) {
            const ret = arg0.onSubmittedWorkDone();
            return ret;
        };
        imports.wbg.__wbg_open_6c3f5ef5a0204c5d = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
            const ret = arg0.open(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments) };
        imports.wbg.__wbg_origin_7c5d649acdace3ea = function() { return handleError(function (arg0, arg1) {
            const ret = arg1.origin;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments) };
        imports.wbg.__wbg_performance_7a3ffd0b17f663ad = function(arg0) {
            const ret = arg0.performance;
            return ret;
        };
        imports.wbg.__wbg_performance_c185c0cdc2766575 = function(arg0) {
            const ret = arg0.performance;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        };
        imports.wbg.__wbg_pixelStorei_6aba5d04cdcaeaf6 = function(arg0, arg1, arg2) {
            arg0.pixelStorei(arg1 >>> 0, arg2);
        };
        imports.wbg.__wbg_pixelStorei_c8520e4b46f4a973 = function(arg0, arg1, arg2) {
            arg0.pixelStorei(arg1 >>> 0, arg2);
        };
        imports.wbg.__wbg_polygonOffset_773fe0017b2c8f51 = function(arg0, arg1, arg2) {
            arg0.polygonOffset(arg1, arg2);
        };
        imports.wbg.__wbg_polygonOffset_8c11c066486216c4 = function(arg0, arg1, arg2) {
            arg0.polygonOffset(arg1, arg2);
        };
        imports.wbg.__wbg_port_008e0061f421df1d = function() { return handleError(function (arg0, arg1) {
            const ret = arg1.port;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments) };
        imports.wbg.__wbg_preventDefault_c2314fd813c02b3c = function(arg0) {
            arg0.preventDefault();
        };
        imports.wbg.__wbg_protocol_faa0494a9b2554cb = function() { return handleError(function (arg0, arg1) {
            const ret = arg1.protocol;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments) };
        imports.wbg.__wbg_push_737cfc8c1432c2c6 = function(arg0, arg1) {
            const ret = arg0.push(arg1);
            return ret;
        };
        imports.wbg.__wbg_queryCounterEXT_7aed85645b7ec1da = function(arg0, arg1, arg2) {
            arg0.queryCounterEXT(arg1, arg2 >>> 0);
        };
        imports.wbg.__wbg_querySelectorAll_40998fd748f057ef = function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.querySelectorAll(getStringFromWasm0(arg1, arg2));
            return ret;
        }, arguments) };
        imports.wbg.__wbg_querySelector_c69f8b573958906b = function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.querySelector(getStringFromWasm0(arg1, arg2));
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments) };
        imports.wbg.__wbg_queueMicrotask_97d92b4fcc8a61c5 = function(arg0) {
            queueMicrotask(arg0);
        };
        imports.wbg.__wbg_queueMicrotask_d3219def82552485 = function(arg0) {
            const ret = arg0.queueMicrotask;
            return ret;
        };
        imports.wbg.__wbg_queue_13a5c48e3c54a28c = function(arg0) {
            const ret = arg0.queue;
            return ret;
        };
        imports.wbg.__wbg_readBuffer_1c35b1e4939f881d = function(arg0, arg1) {
            arg0.readBuffer(arg1 >>> 0);
        };
        imports.wbg.__wbg_readPixels_51a0c02cdee207a5 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
            arg0.readPixels(arg1, arg2, arg3, arg4, arg5 >>> 0, arg6 >>> 0, arg7);
        }, arguments) };
        imports.wbg.__wbg_readPixels_a6cbb21794452142 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
            arg0.readPixels(arg1, arg2, arg3, arg4, arg5 >>> 0, arg6 >>> 0, arg7);
        }, arguments) };
        imports.wbg.__wbg_readPixels_cd64c5a7b0343355 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
            arg0.readPixels(arg1, arg2, arg3, arg4, arg5 >>> 0, arg6 >>> 0, arg7);
        }, arguments) };
        imports.wbg.__wbg_removeEventListener_056dfe8c3d6c58f9 = function() { return handleError(function (arg0, arg1, arg2, arg3) {
            arg0.removeEventListener(getStringFromWasm0(arg1, arg2), arg3);
        }, arguments) };
        imports.wbg.__wbg_remove_e2d2659f3128c045 = function(arg0) {
            arg0.remove();
        };
        imports.wbg.__wbg_renderbufferStorageMultisample_13fbd5e58900c6fe = function(arg0, arg1, arg2, arg3, arg4, arg5) {
            arg0.renderbufferStorageMultisample(arg1 >>> 0, arg2, arg3 >>> 0, arg4, arg5);
        };
        imports.wbg.__wbg_renderbufferStorage_73e01ea83b8afab4 = function(arg0, arg1, arg2, arg3, arg4) {
            arg0.renderbufferStorage(arg1 >>> 0, arg2 >>> 0, arg3, arg4);
        };
        imports.wbg.__wbg_renderbufferStorage_f010012bd3566942 = function(arg0, arg1, arg2, arg3, arg4) {
            arg0.renderbufferStorage(arg1 >>> 0, arg2 >>> 0, arg3, arg4);
        };
        imports.wbg.__wbg_requestAdapter_9b2b28d500da98ab = function(arg0) {
            const ret = arg0.requestAdapter();
            return ret;
        };
        imports.wbg.__wbg_requestAdapter_cc9a9924f72519ab = function(arg0, arg1) {
            const ret = arg0.requestAdapter(arg1);
            return ret;
        };
        imports.wbg.__wbg_requestAnimationFrame_d7fd890aaefc3246 = function() { return handleError(function (arg0, arg1) {
            const ret = arg0.requestAnimationFrame(arg1);
            return ret;
        }, arguments) };
        imports.wbg.__wbg_requestDevice_295504649d1da14c = function(arg0, arg1) {
            const ret = arg0.requestDevice(arg1);
            return ret;
        };
        imports.wbg.__wbg_resolve_4851785c9c5f573d = function(arg0) {
            const ret = Promise.resolve(arg0);
            return ret;
        };
        imports.wbg.__wbg_right_54416a875852cab1 = function(arg0) {
            const ret = arg0.right;
            return ret;
        };
        imports.wbg.__wbg_samplerParameterf_909baf50360c94d4 = function(arg0, arg1, arg2, arg3) {
            arg0.samplerParameterf(arg1, arg2 >>> 0, arg3);
        };
        imports.wbg.__wbg_samplerParameteri_d5c292172718da63 = function(arg0, arg1, arg2, arg3) {
            arg0.samplerParameteri(arg1, arg2 >>> 0, arg3);
        };
        imports.wbg.__wbg_scissor_e917a332f67a5d30 = function(arg0, arg1, arg2, arg3, arg4) {
            arg0.scissor(arg1, arg2, arg3, arg4);
        };
        imports.wbg.__wbg_scissor_eb177ca33bf24a44 = function(arg0, arg1, arg2, arg3, arg4) {
            arg0.scissor(arg1, arg2, arg3, arg4);
        };
        imports.wbg.__wbg_search_c1c3bfbeadd96c47 = function() { return handleError(function (arg0, arg1) {
            const ret = arg1.search;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments) };
        imports.wbg.__wbg_setAttribute_2704501201f15687 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.setAttribute(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
        }, arguments) };
        imports.wbg.__wbg_setBindGroup_bf7233e51ee0fd56 = function(arg0, arg1, arg2) {
            arg0.setBindGroup(arg1 >>> 0, arg2);
        };
        imports.wbg.__wbg_setBindGroup_c532d9e80c3b863a = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
            arg0.setBindGroup(arg1 >>> 0, arg2, getArrayU32FromWasm0(arg3, arg4), arg5, arg6 >>> 0);
        }, arguments) };
        imports.wbg.__wbg_setIndexBuffer_d5812b7c5ff15c50 = function(arg0, arg1, arg2, arg3) {
            arg0.setIndexBuffer(arg1, __wbindgen_enum_GpuIndexFormat[arg2], arg3);
        };
        imports.wbg.__wbg_setIndexBuffer_d6851b016152211a = function(arg0, arg1, arg2, arg3, arg4) {
            arg0.setIndexBuffer(arg1, __wbindgen_enum_GpuIndexFormat[arg2], arg3, arg4);
        };
        imports.wbg.__wbg_setItem_212ecc915942ab0a = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.setItem(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
        }, arguments) };
        imports.wbg.__wbg_setPipeline_b632e313f54b1cb1 = function(arg0, arg1) {
            arg0.setPipeline(arg1);
        };
        imports.wbg.__wbg_setProperty_f2cf326652b9a713 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.setProperty(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
        }, arguments) };
        imports.wbg.__wbg_setScissorRect_13be2665184d6e20 = function(arg0, arg1, arg2, arg3, arg4) {
            arg0.setScissorRect(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
        };
        imports.wbg.__wbg_setVertexBuffer_71f6b6b9f7c32e99 = function(arg0, arg1, arg2, arg3) {
            arg0.setVertexBuffer(arg1 >>> 0, arg2, arg3);
        };
        imports.wbg.__wbg_setVertexBuffer_c8234139ead62a61 = function(arg0, arg1, arg2, arg3, arg4) {
            arg0.setVertexBuffer(arg1 >>> 0, arg2, arg3, arg4);
        };
        imports.wbg.__wbg_setViewport_b25340c5cfc5e64f = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
            arg0.setViewport(arg1, arg2, arg3, arg4, arg5, arg6);
        };
        imports.wbg.__wbg_set_11cd83f45504cedf = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.set(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
        }, arguments) };
        imports.wbg.__wbg_set_65595bdd868b3009 = function(arg0, arg1, arg2) {
            arg0.set(arg1, arg2 >>> 0);
        };
        imports.wbg.__wbg_set_bb8cecf6a62b9f46 = function() { return handleError(function (arg0, arg1, arg2) {
            const ret = Reflect.set(arg0, arg1, arg2);
            return ret;
        }, arguments) };
        imports.wbg.__wbg_seta_e87a2053d5fccb4c = function(arg0, arg1) {
            arg0.a = arg1;
        };
        imports.wbg.__wbg_setaccess_69d91e9d4e4ceac2 = function(arg0, arg1) {
            arg0.access = __wbindgen_enum_GpuStorageTextureAccess[arg1];
        };
        imports.wbg.__wbg_setaddressmodeu_17e91ba6701d7cdf = function(arg0, arg1) {
            arg0.addressModeU = __wbindgen_enum_GpuAddressMode[arg1];
        };
        imports.wbg.__wbg_setaddressmodev_83cff33885b49fd0 = function(arg0, arg1) {
            arg0.addressModeV = __wbindgen_enum_GpuAddressMode[arg1];
        };
        imports.wbg.__wbg_setaddressmodew_2445963d0feae757 = function(arg0, arg1) {
            arg0.addressModeW = __wbindgen_enum_GpuAddressMode[arg1];
        };
        imports.wbg.__wbg_setalpha_a7a68e5ec04efe77 = function(arg0, arg1) {
            arg0.alpha = arg1;
        };
        imports.wbg.__wbg_setalphamode_60f87267fa3d95d0 = function(arg0, arg1) {
            arg0.alphaMode = __wbindgen_enum_GpuCanvasAlphaMode[arg1];
        };
        imports.wbg.__wbg_setalphatocoverageenabled_67782b8fff854d06 = function(arg0, arg1) {
            arg0.alphaToCoverageEnabled = arg1 !== 0;
        };
        imports.wbg.__wbg_setarraylayercount_2bd74e56899b603a = function(arg0, arg1) {
            arg0.arrayLayerCount = arg1 >>> 0;
        };
        imports.wbg.__wbg_setarraystride_acb85bd3848529a6 = function(arg0, arg1) {
            arg0.arrayStride = arg1;
        };
        imports.wbg.__wbg_setaspect_82ca9caa27a4c533 = function(arg0, arg1) {
            arg0.aspect = __wbindgen_enum_GpuTextureAspect[arg1];
        };
        imports.wbg.__wbg_setaspect_b78bd0b34ebfe19b = function(arg0, arg1) {
            arg0.aspect = __wbindgen_enum_GpuTextureAspect[arg1];
        };
        imports.wbg.__wbg_setattributes_4d5de6c80e3a7e73 = function(arg0, arg1) {
            arg0.attributes = arg1;
        };
        imports.wbg.__wbg_setautofocus_6ca6f0ab5a566c21 = function() { return handleError(function (arg0, arg1) {
            arg0.autofocus = arg1 !== 0;
        }, arguments) };
        imports.wbg.__wbg_setb_87725d82ac69a631 = function(arg0, arg1) {
            arg0.b = arg1;
        };
        imports.wbg.__wbg_setbasearraylayer_064977086530f2e7 = function(arg0, arg1) {
            arg0.baseArrayLayer = arg1 >>> 0;
        };
        imports.wbg.__wbg_setbasemiplevel_845abe28a57bd901 = function(arg0, arg1) {
            arg0.baseMipLevel = arg1 >>> 0;
        };
        imports.wbg.__wbg_setbeginningofpasswriteindex_18bb7ab9fb16de02 = function(arg0, arg1) {
            arg0.beginningOfPassWriteIndex = arg1 >>> 0;
        };
        imports.wbg.__wbg_setbindgrouplayouts_db65f9787380e242 = function(arg0, arg1) {
            arg0.bindGroupLayouts = arg1;
        };
        imports.wbg.__wbg_setbinding_35fa28beda49ff83 = function(arg0, arg1) {
            arg0.binding = arg1 >>> 0;
        };
        imports.wbg.__wbg_setbinding_3b4abee15b11f6ec = function(arg0, arg1) {
            arg0.binding = arg1 >>> 0;
        };
        imports.wbg.__wbg_setblend_21337ec514ad2280 = function(arg0, arg1) {
            arg0.blend = arg1;
        };
        imports.wbg.__wbg_setbody_5923b78a95eedf29 = function(arg0, arg1) {
            arg0.body = arg1;
        };
        imports.wbg.__wbg_setbox_2786f3ccea97cac4 = function(arg0, arg1) {
            arg0.box = __wbindgen_enum_ResizeObserverBoxOptions[arg1];
        };
        imports.wbg.__wbg_setbuffer_a9223dfcc0e34853 = function(arg0, arg1) {
            arg0.buffer = arg1;
        };
        imports.wbg.__wbg_setbuffer_d49e95bb5349d827 = function(arg0, arg1) {
            arg0.buffer = arg1;
        };
        imports.wbg.__wbg_setbuffer_f8967886328760f6 = function(arg0, arg1) {
            arg0.buffer = arg1;
        };
        imports.wbg.__wbg_setbuffers_68609a5d48c31b27 = function(arg0, arg1) {
            arg0.buffers = arg1;
        };
        imports.wbg.__wbg_setbytesperrow_1ee6dfa31a861d51 = function(arg0, arg1) {
            arg0.bytesPerRow = arg1 >>> 0;
        };
        imports.wbg.__wbg_setbytesperrow_4a52bbf4cdbfe78b = function(arg0, arg1) {
            arg0.bytesPerRow = arg1 >>> 0;
        };
        imports.wbg.__wbg_setclearvalue_8fc3623594df71b2 = function(arg0, arg1) {
            arg0.clearValue = arg1;
        };
        imports.wbg.__wbg_setcode_20093e29960281f8 = function(arg0, arg1, arg2) {
            arg0.code = getStringFromWasm0(arg1, arg2);
        };
        imports.wbg.__wbg_setcolor_64a633bf7b4cf6fe = function(arg0, arg1) {
            arg0.color = arg1;
        };
        imports.wbg.__wbg_setcolorattachments_4d4c71d7eeba8e2f = function(arg0, arg1) {
            arg0.colorAttachments = arg1;
        };
        imports.wbg.__wbg_setcompare_0376672b0c0bbfd8 = function(arg0, arg1) {
            arg0.compare = __wbindgen_enum_GpuCompareFunction[arg1];
        };
        imports.wbg.__wbg_setcompare_f3fb77a9bf3f0f7e = function(arg0, arg1) {
            arg0.compare = __wbindgen_enum_GpuCompareFunction[arg1];
        };
        imports.wbg.__wbg_setcount_8cf9a3dd1ffc7b7d = function(arg0, arg1) {
            arg0.count = arg1 >>> 0;
        };
        imports.wbg.__wbg_setcullmode_41c12526410d3e05 = function(arg0, arg1) {
            arg0.cullMode = __wbindgen_enum_GpuCullMode[arg1];
        };
        imports.wbg.__wbg_setdepthbias_31554aeaaa675954 = function(arg0, arg1) {
            arg0.depthBias = arg1;
        };
        imports.wbg.__wbg_setdepthbiasclamp_8cf5f4f0d80e8cba = function(arg0, arg1) {
            arg0.depthBiasClamp = arg1;
        };
        imports.wbg.__wbg_setdepthbiasslopescale_310ae406f2d3a055 = function(arg0, arg1) {
            arg0.depthBiasSlopeScale = arg1;
        };
        imports.wbg.__wbg_setdepthclearvalue_8760aafb583d5312 = function(arg0, arg1) {
            arg0.depthClearValue = arg1;
        };
        imports.wbg.__wbg_setdepthcompare_8831904ce3173063 = function(arg0, arg1) {
            arg0.depthCompare = __wbindgen_enum_GpuCompareFunction[arg1];
        };
        imports.wbg.__wbg_setdepthfailop_62ec602580477afc = function(arg0, arg1) {
            arg0.depthFailOp = __wbindgen_enum_GpuStencilOperation[arg1];
        };
        imports.wbg.__wbg_setdepthloadop_102d57f3ddf95461 = function(arg0, arg1) {
            arg0.depthLoadOp = __wbindgen_enum_GpuLoadOp[arg1];
        };
        imports.wbg.__wbg_setdepthorarraylayers_d7b93db07c5da69d = function(arg0, arg1) {
            arg0.depthOrArrayLayers = arg1 >>> 0;
        };
        imports.wbg.__wbg_setdepthreadonly_aebc24a542debafd = function(arg0, arg1) {
            arg0.depthReadOnly = arg1 !== 0;
        };
        imports.wbg.__wbg_setdepthstencil_5627e73aaf33912c = function(arg0, arg1) {
            arg0.depthStencil = arg1;
        };
        imports.wbg.__wbg_setdepthstencilattachment_04b936535778e362 = function(arg0, arg1) {
            arg0.depthStencilAttachment = arg1;
        };
        imports.wbg.__wbg_setdepthstoreop_610b0a50dbb00eb8 = function(arg0, arg1) {
            arg0.depthStoreOp = __wbindgen_enum_GpuStoreOp[arg1];
        };
        imports.wbg.__wbg_setdepthwriteenabled_f94217df9ff2d60c = function(arg0, arg1) {
            arg0.depthWriteEnabled = arg1 !== 0;
        };
        imports.wbg.__wbg_setdevice_dab18ead7bfc077b = function(arg0, arg1) {
            arg0.device = arg1;
        };
        imports.wbg.__wbg_setdimension_2a75a794a0bfcc94 = function(arg0, arg1) {
            arg0.dimension = __wbindgen_enum_GpuTextureViewDimension[arg1];
        };
        imports.wbg.__wbg_setdimension_a3c50fb6d43f6cec = function(arg0, arg1) {
            arg0.dimension = __wbindgen_enum_GpuTextureDimension[arg1];
        };
        imports.wbg.__wbg_setdstfactor_cf872fec841747ac = function(arg0, arg1) {
            arg0.dstFactor = __wbindgen_enum_GpuBlendFactor[arg1];
        };
        imports.wbg.__wbg_setendofpasswriteindex_02ee5189026c1d3a = function(arg0, arg1) {
            arg0.endOfPassWriteIndex = arg1 >>> 0;
        };
        imports.wbg.__wbg_setentries_1472deaee7053fb7 = function(arg0, arg1) {
            arg0.entries = arg1;
        };
        imports.wbg.__wbg_setentries_b2258b5ef29810b0 = function(arg0, arg1) {
            arg0.entries = arg1;
        };
        imports.wbg.__wbg_setentrypoint_11f912102ade99b1 = function(arg0, arg1, arg2) {
            arg0.entryPoint = getStringFromWasm0(arg1, arg2);
        };
        imports.wbg.__wbg_setentrypoint_f9224cdb29cbe5df = function(arg0, arg1, arg2) {
            arg0.entryPoint = getStringFromWasm0(arg1, arg2);
        };
        imports.wbg.__wbg_setexternaltexture_613e4434100d63ee = function(arg0, arg1) {
            arg0.externalTexture = arg1;
        };
        imports.wbg.__wbg_setfailop_73a4e194f4bc914a = function(arg0, arg1) {
            arg0.failOp = __wbindgen_enum_GpuStencilOperation[arg1];
        };
        imports.wbg.__wbg_setformat_1670e760e18ac001 = function(arg0, arg1) {
            arg0.format = __wbindgen_enum_GpuTextureFormat[arg1];
        };
        imports.wbg.__wbg_setformat_2141a8a1fd36fb9c = function(arg0, arg1) {
            arg0.format = __wbindgen_enum_GpuTextureFormat[arg1];
        };
        imports.wbg.__wbg_setformat_25e4aacc74949e38 = function(arg0, arg1) {
            arg0.format = __wbindgen_enum_GpuTextureFormat[arg1];
        };
        imports.wbg.__wbg_setformat_3f7008e9e568f0fc = function(arg0, arg1) {
            arg0.format = __wbindgen_enum_GpuVertexFormat[arg1];
        };
        imports.wbg.__wbg_setformat_4a4fccdfc45bc409 = function(arg0, arg1) {
            arg0.format = __wbindgen_enum_GpuTextureFormat[arg1];
        };
        imports.wbg.__wbg_setformat_7696f8290da8a36b = function(arg0, arg1) {
            arg0.format = __wbindgen_enum_GpuTextureFormat[arg1];
        };
        imports.wbg.__wbg_setformat_974a01725f579c5d = function(arg0, arg1) {
            arg0.format = __wbindgen_enum_GpuTextureFormat[arg1];
        };
        imports.wbg.__wbg_setfragment_f7ce64feaf1cd7dc = function(arg0, arg1) {
            arg0.fragment = arg1;
        };
        imports.wbg.__wbg_setfrontface_09e32557f8852301 = function(arg0, arg1) {
            arg0.frontFace = __wbindgen_enum_GpuFrontFace[arg1];
        };
        imports.wbg.__wbg_setg_c31c959457596456 = function(arg0, arg1) {
            arg0.g = arg1;
        };
        imports.wbg.__wbg_sethasdynamicoffset_fbc1bb343939ed0b = function(arg0, arg1) {
            arg0.hasDynamicOffset = arg1 !== 0;
        };
        imports.wbg.__wbg_setheight_433680330c9420c3 = function(arg0, arg1) {
            arg0.height = arg1 >>> 0;
        };
        imports.wbg.__wbg_setheight_710b87344b3d6748 = function(arg0, arg1) {
            arg0.height = arg1 >>> 0;
        };
        imports.wbg.__wbg_setheight_da683a33fa99843c = function(arg0, arg1) {
            arg0.height = arg1 >>> 0;
        };
        imports.wbg.__wbg_setlabel_0ec13ba975f77124 = function(arg0, arg1, arg2) {
            arg0.label = getStringFromWasm0(arg1, arg2);
        };
        imports.wbg.__wbg_setlabel_3b658d9ce970552c = function(arg0, arg1, arg2) {
            arg0.label = getStringFromWasm0(arg1, arg2);
        };
        imports.wbg.__wbg_setlabel_48883f5f49e4ec47 = function(arg0, arg1, arg2) {
            arg0.label = getStringFromWasm0(arg1, arg2);
        };
        imports.wbg.__wbg_setlabel_4bbbc289ddddebd7 = function(arg0, arg1, arg2) {
            arg0.label = getStringFromWasm0(arg1, arg2);
        };
        imports.wbg.__wbg_setlabel_4d609666f09cfdfb = function(arg0, arg1, arg2) {
            arg0.label = getStringFromWasm0(arg1, arg2);
        };
        imports.wbg.__wbg_setlabel_4f4264b0041180e2 = function(arg0, arg1, arg2) {
            arg0.label = getStringFromWasm0(arg1, arg2);
        };
        imports.wbg.__wbg_setlabel_5b46e419b9e88c5e = function(arg0, arg1, arg2) {
            arg0.label = getStringFromWasm0(arg1, arg2);
        };
        imports.wbg.__wbg_setlabel_95423cd2e1f4b5dd = function(arg0, arg1, arg2) {
            arg0.label = getStringFromWasm0(arg1, arg2);
        };
        imports.wbg.__wbg_setlabel_c3fc0a66f4ecc82b = function(arg0, arg1, arg2) {
            arg0.label = getStringFromWasm0(arg1, arg2);
        };
        imports.wbg.__wbg_setlabel_c857f45a8485236a = function(arg0, arg1, arg2) {
            arg0.label = getStringFromWasm0(arg1, arg2);
        };
        imports.wbg.__wbg_setlabel_dc8df9969898889c = function(arg0, arg1, arg2) {
            arg0.label = getStringFromWasm0(arg1, arg2);
        };
        imports.wbg.__wbg_setlabel_e3709fe3e82429b5 = function(arg0, arg1, arg2) {
            arg0.label = getStringFromWasm0(arg1, arg2);
        };
        imports.wbg.__wbg_setlabel_fb5d28b3ba7af11f = function(arg0, arg1, arg2) {
            arg0.label = getStringFromWasm0(arg1, arg2);
        };
        imports.wbg.__wbg_setlayout_7f76289be3294b4a = function(arg0, arg1) {
            arg0.layout = arg1;
        };
        imports.wbg.__wbg_setlayout_c20d48b352b24c1b = function(arg0, arg1) {
            arg0.layout = arg1;
        };
        imports.wbg.__wbg_setloadop_c71d200e998908b0 = function(arg0, arg1) {
            arg0.loadOp = __wbindgen_enum_GpuLoadOp[arg1];
        };
        imports.wbg.__wbg_setlodmaxclamp_aaac5daaecca96d4 = function(arg0, arg1) {
            arg0.lodMaxClamp = arg1;
        };
        imports.wbg.__wbg_setlodminclamp_ed2162d4b198abba = function(arg0, arg1) {
            arg0.lodMinClamp = arg1;
        };
        imports.wbg.__wbg_setmagfilter_c8a8c1218cd38da6 = function(arg0, arg1) {
            arg0.magFilter = __wbindgen_enum_GpuFilterMode[arg1];
        };
        imports.wbg.__wbg_setmappedatcreation_2d003ce549611385 = function(arg0, arg1) {
            arg0.mappedAtCreation = arg1 !== 0;
        };
        imports.wbg.__wbg_setmask_a933ba2e61c7610a = function(arg0, arg1) {
            arg0.mask = arg1 >>> 0;
        };
        imports.wbg.__wbg_setmaxanisotropy_fb4bae64cb5acf57 = function(arg0, arg1) {
            arg0.maxAnisotropy = arg1;
        };
        imports.wbg.__wbg_setmethod_3c5280fe5d890842 = function(arg0, arg1, arg2) {
            arg0.method = getStringFromWasm0(arg1, arg2);
        };
        imports.wbg.__wbg_setminbindingsize_308360802ae7a9ba = function(arg0, arg1) {
            arg0.minBindingSize = arg1;
        };
        imports.wbg.__wbg_setminfilter_2dafbdeb188fd817 = function(arg0, arg1) {
            arg0.minFilter = __wbindgen_enum_GpuFilterMode[arg1];
        };
        imports.wbg.__wbg_setmiplevel_babe1ff64201f0ea = function(arg0, arg1) {
            arg0.mipLevel = arg1 >>> 0;
        };
        imports.wbg.__wbg_setmiplevelcount_cd3197411f4f2432 = function(arg0, arg1) {
            arg0.mipLevelCount = arg1 >>> 0;
        };
        imports.wbg.__wbg_setmiplevelcount_fdc72450a94244ef = function(arg0, arg1) {
            arg0.mipLevelCount = arg1 >>> 0;
        };
        imports.wbg.__wbg_setmipmapfilter_79f552c459e63aa6 = function(arg0, arg1) {
            arg0.mipmapFilter = __wbindgen_enum_GpuMipmapFilterMode[arg1];
        };
        imports.wbg.__wbg_setmode_5dc300b865044b65 = function(arg0, arg1) {
            arg0.mode = __wbindgen_enum_RequestMode[arg1];
        };
        imports.wbg.__wbg_setmodule_18d541838665d831 = function(arg0, arg1) {
            arg0.module = arg1;
        };
        imports.wbg.__wbg_setmodule_20641353ebb28712 = function(arg0, arg1) {
            arg0.module = arg1;
        };
        imports.wbg.__wbg_setmultisample_e0f310ea9e40c2d9 = function(arg0, arg1) {
            arg0.multisample = arg1;
        };
        imports.wbg.__wbg_setmultisampled_cd50d8f6709cea1a = function(arg0, arg1) {
            arg0.multisampled = arg1 !== 0;
        };
        imports.wbg.__wbg_setoffset_2e78915f5d65d704 = function(arg0, arg1) {
            arg0.offset = arg1;
        };
        imports.wbg.__wbg_setoffset_405017033a936d89 = function(arg0, arg1) {
            arg0.offset = arg1;
        };
        imports.wbg.__wbg_setoffset_e7ce8b8eaaf46b95 = function(arg0, arg1) {
            arg0.offset = arg1;
        };
        imports.wbg.__wbg_setoffset_efe9880f803c2500 = function(arg0, arg1) {
            arg0.offset = arg1;
        };
        imports.wbg.__wbg_setonce_0cb80aea26303a35 = function(arg0, arg1) {
            arg0.once = arg1 !== 0;
        };
        imports.wbg.__wbg_setoperation_b96fabca3716aaa3 = function(arg0, arg1) {
            arg0.operation = __wbindgen_enum_GpuBlendOperation[arg1];
        };
        imports.wbg.__wbg_setorigin_c5f017d3f09ad7ff = function(arg0, arg1) {
            arg0.origin = arg1;
        };
        imports.wbg.__wbg_setpassop_765be90bb2f27220 = function(arg0, arg1) {
            arg0.passOp = __wbindgen_enum_GpuStencilOperation[arg1];
        };
        imports.wbg.__wbg_setpitch_5f1e968545051707 = function(arg0, arg1) {
            arg0.pitch = arg1;
        };
        imports.wbg.__wbg_setpowerpreference_39b347bf0d236ce6 = function(arg0, arg1) {
            arg0.powerPreference = __wbindgen_enum_GpuPowerPreference[arg1];
        };
        imports.wbg.__wbg_setprimitive_d6456d7efe6b4fe5 = function(arg0, arg1) {
            arg0.primitive = arg1;
        };
        imports.wbg.__wbg_setqueryset_20ecd7f9a16f3ec6 = function(arg0, arg1) {
            arg0.querySet = arg1;
        };
        imports.wbg.__wbg_setr_07bd987697069496 = function(arg0, arg1) {
            arg0.r = arg1;
        };
        imports.wbg.__wbg_setrate_e0aa4bfe9a720dc5 = function(arg0, arg1) {
            arg0.rate = arg1;
        };
        imports.wbg.__wbg_setrequiredfeatures_650c9e5dafbaa395 = function(arg0, arg1) {
            arg0.requiredFeatures = arg1;
        };
        imports.wbg.__wbg_setresolvetarget_c18cd4048765732a = function(arg0, arg1) {
            arg0.resolveTarget = arg1;
        };
        imports.wbg.__wbg_setresource_8cea0fe2c8745c3e = function(arg0, arg1) {
            arg0.resource = arg1;
        };
        imports.wbg.__wbg_setrowsperimage_2f7969031c71f0d8 = function(arg0, arg1) {
            arg0.rowsPerImage = arg1 >>> 0;
        };
        imports.wbg.__wbg_setrowsperimage_a5295fffedd9f061 = function(arg0, arg1) {
            arg0.rowsPerImage = arg1 >>> 0;
        };
        imports.wbg.__wbg_setsamplecount_07aedd28692aeae8 = function(arg0, arg1) {
            arg0.sampleCount = arg1 >>> 0;
        };
        imports.wbg.__wbg_setsampler_1a2729c0aa194081 = function(arg0, arg1) {
            arg0.sampler = arg1;
        };
        imports.wbg.__wbg_setsampletype_601a744a4bd6ea07 = function(arg0, arg1) {
            arg0.sampleType = __wbindgen_enum_GpuTextureSampleType[arg1];
        };
        imports.wbg.__wbg_setshaderlocation_bdcfdc1009d351b1 = function(arg0, arg1) {
            arg0.shaderLocation = arg1 >>> 0;
        };
        imports.wbg.__wbg_setsize_7a392ee585f87da8 = function(arg0, arg1) {
            arg0.size = arg1;
        };
        imports.wbg.__wbg_setsize_c6bf409f70f4420f = function(arg0, arg1) {
            arg0.size = arg1;
        };
        imports.wbg.__wbg_setsize_f902b266d636bf6e = function(arg0, arg1) {
            arg0.size = arg1;
        };
        imports.wbg.__wbg_setsrcfactor_50cef27aa8aece91 = function(arg0, arg1) {
            arg0.srcFactor = __wbindgen_enum_GpuBlendFactor[arg1];
        };
        imports.wbg.__wbg_setstencilback_e740415a5c0b637a = function(arg0, arg1) {
            arg0.stencilBack = arg1;
        };
        imports.wbg.__wbg_setstencilclearvalue_6be76b512040398d = function(arg0, arg1) {
            arg0.stencilClearValue = arg1 >>> 0;
        };
        imports.wbg.__wbg_setstencilfront_03185e1c3bafa411 = function(arg0, arg1) {
            arg0.stencilFront = arg1;
        };
        imports.wbg.__wbg_setstencilloadop_084f44352b978b3d = function(arg0, arg1) {
            arg0.stencilLoadOp = __wbindgen_enum_GpuLoadOp[arg1];
        };
        imports.wbg.__wbg_setstencilreadmask_e2736fc4af9399e4 = function(arg0, arg1) {
            arg0.stencilReadMask = arg1 >>> 0;
        };
        imports.wbg.__wbg_setstencilreadonly_31f3d99299373c12 = function(arg0, arg1) {
            arg0.stencilReadOnly = arg1 !== 0;
        };
        imports.wbg.__wbg_setstencilstoreop_428fb4955e4899d6 = function(arg0, arg1) {
            arg0.stencilStoreOp = __wbindgen_enum_GpuStoreOp[arg1];
        };
        imports.wbg.__wbg_setstencilwritemask_b1d3e1655305a187 = function(arg0, arg1) {
            arg0.stencilWriteMask = arg1 >>> 0;
        };
        imports.wbg.__wbg_setstepmode_98e49f7877daf1c5 = function(arg0, arg1) {
            arg0.stepMode = __wbindgen_enum_GpuVertexStepMode[arg1];
        };
        imports.wbg.__wbg_setstoragetexture_6ee0cbeb50698110 = function(arg0, arg1) {
            arg0.storageTexture = arg1;
        };
        imports.wbg.__wbg_setstoreop_e761080d541a10cc = function(arg0, arg1) {
            arg0.storeOp = __wbindgen_enum_GpuStoreOp[arg1];
        };
        imports.wbg.__wbg_setstripindexformat_16df9e33c7aa97e6 = function(arg0, arg1) {
            arg0.stripIndexFormat = __wbindgen_enum_GpuIndexFormat[arg1];
        };
        imports.wbg.__wbg_settabIndex_31adfec3c7eafbce = function(arg0, arg1) {
            arg0.tabIndex = arg1;
        };
        imports.wbg.__wbg_settargets_9fd1ec0b8edc895c = function(arg0, arg1) {
            arg0.targets = arg1;
        };
        imports.wbg.__wbg_settexture_f03807916f70dcc6 = function(arg0, arg1) {
            arg0.texture = arg1;
        };
        imports.wbg.__wbg_settexture_f8ae0bb4bb159354 = function(arg0, arg1) {
            arg0.texture = arg1;
        };
        imports.wbg.__wbg_settimestampwrites_3998dbfa21e48dbe = function(arg0, arg1) {
            arg0.timestampWrites = arg1;
        };
        imports.wbg.__wbg_settopology_036632318a24227d = function(arg0, arg1) {
            arg0.topology = __wbindgen_enum_GpuPrimitiveTopology[arg1];
        };
        imports.wbg.__wbg_settype_0cb4cdb5eff87f31 = function(arg0, arg1) {
            arg0.type = __wbindgen_enum_GpuBufferBindingType[arg1];
        };
        imports.wbg.__wbg_settype_2a902a4a235bb64a = function(arg0, arg1, arg2) {
            arg0.type = getStringFromWasm0(arg1, arg2);
        };
        imports.wbg.__wbg_settype_39ed370d3edd403c = function(arg0, arg1, arg2) {
            arg0.type = getStringFromWasm0(arg1, arg2);
        };
        imports.wbg.__wbg_settype_d05fa8415ad0761f = function(arg0, arg1) {
            arg0.type = __wbindgen_enum_GpuSamplerBindingType[arg1];
        };
        imports.wbg.__wbg_setunclippeddepth_17a5ab83d4e7cadc = function(arg0, arg1) {
            arg0.unclippedDepth = arg1 !== 0;
        };
        imports.wbg.__wbg_setusage_3d569e7b02227032 = function(arg0, arg1) {
            arg0.usage = arg1 >>> 0;
        };
        imports.wbg.__wbg_setusage_ac222ece73f994b7 = function(arg0, arg1) {
            arg0.usage = arg1 >>> 0;
        };
        imports.wbg.__wbg_setusage_ca00520767c8a475 = function(arg0, arg1) {
            arg0.usage = arg1 >>> 0;
        };
        imports.wbg.__wbg_setusage_fe13088353b65bee = function(arg0, arg1) {
            arg0.usage = arg1 >>> 0;
        };
        imports.wbg.__wbg_setvalue_6ad9ef6c692ea746 = function(arg0, arg1, arg2) {
            arg0.value = getStringFromWasm0(arg1, arg2);
        };
        imports.wbg.__wbg_setvertex_76b7ac4bdfbb06f4 = function(arg0, arg1) {
            arg0.vertex = arg1;
        };
        imports.wbg.__wbg_setview_1ef41eeb26eaf718 = function(arg0, arg1) {
            arg0.view = arg1;
        };
        imports.wbg.__wbg_setview_46b654a12649c6f6 = function(arg0, arg1) {
            arg0.view = arg1;
        };
        imports.wbg.__wbg_setviewdimension_12c332494a2697dc = function(arg0, arg1) {
            arg0.viewDimension = __wbindgen_enum_GpuTextureViewDimension[arg1];
        };
        imports.wbg.__wbg_setviewdimension_31b9fd7126132e82 = function(arg0, arg1) {
            arg0.viewDimension = __wbindgen_enum_GpuTextureViewDimension[arg1];
        };
        imports.wbg.__wbg_setviewformats_152cb995add2ee4e = function(arg0, arg1) {
            arg0.viewFormats = arg1;
        };
        imports.wbg.__wbg_setviewformats_cc77650da6c3b25b = function(arg0, arg1) {
            arg0.viewFormats = arg1;
        };
        imports.wbg.__wbg_setvisibility_6d1fc94552f22ac3 = function(arg0, arg1) {
            arg0.visibility = arg1 >>> 0;
        };
        imports.wbg.__wbg_setvolume_791fef19f3df9b00 = function(arg0, arg1) {
            arg0.volume = arg1;
        };
        imports.wbg.__wbg_setwidth_5ee1e2d4a0fd929b = function(arg0, arg1) {
            arg0.width = arg1 >>> 0;
        };
        imports.wbg.__wbg_setwidth_660ca581e3fbe279 = function(arg0, arg1) {
            arg0.width = arg1 >>> 0;
        };
        imports.wbg.__wbg_setwidth_c5fed9f5e7f0b406 = function(arg0, arg1) {
            arg0.width = arg1 >>> 0;
        };
        imports.wbg.__wbg_setwritemask_c92743022356850e = function(arg0, arg1) {
            arg0.writeMask = arg1 >>> 0;
        };
        imports.wbg.__wbg_setx_0771b0f86d56cdf9 = function(arg0, arg1) {
            arg0.x = arg1 >>> 0;
        };
        imports.wbg.__wbg_sety_668d1578881576dd = function(arg0, arg1) {
            arg0.y = arg1 >>> 0;
        };
        imports.wbg.__wbg_setz_3e24a918a76c816d = function(arg0, arg1) {
            arg0.z = arg1 >>> 0;
        };
        imports.wbg.__wbg_shaderSource_72d3e8597ef85b67 = function(arg0, arg1, arg2, arg3) {
            arg0.shaderSource(arg1, getStringFromWasm0(arg2, arg3));
        };
        imports.wbg.__wbg_shaderSource_ad0087e637a35191 = function(arg0, arg1, arg2, arg3) {
            arg0.shaderSource(arg1, getStringFromWasm0(arg2, arg3));
        };
        imports.wbg.__wbg_shiftKey_2bebb3b703254f47 = function(arg0) {
            const ret = arg0.shiftKey;
            return ret;
        };
        imports.wbg.__wbg_shiftKey_86e737105bab1a54 = function(arg0) {
            const ret = arg0.shiftKey;
            return ret;
        };
        imports.wbg.__wbg_size_0ee2999debd2b5d2 = function(arg0) {
            const ret = arg0.size;
            return ret;
        };
        imports.wbg.__wbg_size_3808d41635a9c259 = function(arg0) {
            const ret = arg0.size;
            return ret;
        };
        imports.wbg.__wbg_speak_edb998564c00bb2a = function(arg0, arg1) {
            arg0.speak(arg1);
        };
        imports.wbg.__wbg_speechSynthesis_74e411ffcf3fc3c7 = function() { return handleError(function (arg0) {
            const ret = arg0.speechSynthesis;
            return ret;
        }, arguments) };
        imports.wbg.__wbg_stack_d87a83f5bc721084 = function(arg0, arg1) {
            const ret = arg1.stack;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        };
        imports.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07 = function() {
            const ret = typeof global === 'undefined' ? null : global;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        };
        imports.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0 = function() {
            const ret = typeof globalThis === 'undefined' ? null : globalThis;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        };
        imports.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819 = function() {
            const ret = typeof self === 'undefined' ? null : self;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        };
        imports.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40 = function() {
            const ret = typeof window === 'undefined' ? null : window;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        };
        imports.wbg.__wbg_statusText_207754230b39e67c = function(arg0, arg1) {
            const ret = arg1.statusText;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        };
        imports.wbg.__wbg_status_f6360336ca686bf0 = function(arg0) {
            const ret = arg0.status;
            return ret;
        };
        imports.wbg.__wbg_stencilFuncSeparate_91700dcf367ae07e = function(arg0, arg1, arg2, arg3, arg4) {
            arg0.stencilFuncSeparate(arg1 >>> 0, arg2 >>> 0, arg3, arg4 >>> 0);
        };
        imports.wbg.__wbg_stencilFuncSeparate_c1a6fa2005ca0aaf = function(arg0, arg1, arg2, arg3, arg4) {
            arg0.stencilFuncSeparate(arg1 >>> 0, arg2 >>> 0, arg3, arg4 >>> 0);
        };
        imports.wbg.__wbg_stencilMaskSeparate_4f1a2defc8c10956 = function(arg0, arg1, arg2) {
            arg0.stencilMaskSeparate(arg1 >>> 0, arg2 >>> 0);
        };
        imports.wbg.__wbg_stencilMaskSeparate_f8a0cfb5c2994d4a = function(arg0, arg1, arg2) {
            arg0.stencilMaskSeparate(arg1 >>> 0, arg2 >>> 0);
        };
        imports.wbg.__wbg_stencilMask_1e602ef63f5b4144 = function(arg0, arg1) {
            arg0.stencilMask(arg1 >>> 0);
        };
        imports.wbg.__wbg_stencilMask_cd8ca0a55817e599 = function(arg0, arg1) {
            arg0.stencilMask(arg1 >>> 0);
        };
        imports.wbg.__wbg_stencilOpSeparate_1fa08985e79e1627 = function(arg0, arg1, arg2, arg3, arg4) {
            arg0.stencilOpSeparate(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
        };
        imports.wbg.__wbg_stencilOpSeparate_ff6683bbe3838ae6 = function(arg0, arg1, arg2, arg3, arg4) {
            arg0.stencilOpSeparate(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
        };
        imports.wbg.__wbg_stopPropagation_11d220a858e5e0fb = function(arg0) {
            arg0.stopPropagation();
        };
        imports.wbg.__wbg_style_fb30c14e5815805c = function(arg0) {
            const ret = arg0.style;
            return ret;
        };
        imports.wbg.__wbg_submit_a1850a1cb6baf64a = function(arg0, arg1) {
            arg0.submit(arg1);
        };
        imports.wbg.__wbg_texImage2D_57483314967bdd11 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
            arg0.texImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
        }, arguments) };
        imports.wbg.__wbg_texImage2D_5f2835f02b1d1077 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
            arg0.texImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
        }, arguments) };
        imports.wbg.__wbg_texImage2D_b8edcb5692f65f88 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
            arg0.texImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
        }, arguments) };
        imports.wbg.__wbg_texImage3D_921b54d09bf45af0 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
            arg0.texImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8 >>> 0, arg9 >>> 0, arg10);
        }, arguments) };
        imports.wbg.__wbg_texImage3D_a00b7a4df48cf757 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
            arg0.texImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8 >>> 0, arg9 >>> 0, arg10);
        }, arguments) };
        imports.wbg.__wbg_texParameteri_8112b26b3c360b7e = function(arg0, arg1, arg2, arg3) {
            arg0.texParameteri(arg1 >>> 0, arg2 >>> 0, arg3);
        };
        imports.wbg.__wbg_texParameteri_ef50743cb94d507e = function(arg0, arg1, arg2, arg3) {
            arg0.texParameteri(arg1 >>> 0, arg2 >>> 0, arg3);
        };
        imports.wbg.__wbg_texStorage2D_fbda848497f3674e = function(arg0, arg1, arg2, arg3, arg4, arg5) {
            arg0.texStorage2D(arg1 >>> 0, arg2, arg3 >>> 0, arg4, arg5);
        };
        imports.wbg.__wbg_texStorage3D_fd7a7ca30e7981d1 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
            arg0.texStorage3D(arg1 >>> 0, arg2, arg3 >>> 0, arg4, arg5, arg6);
        };
        imports.wbg.__wbg_texSubImage2D_061605071aad9d2c = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
            arg0.texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
        }, arguments) };
        imports.wbg.__wbg_texSubImage2D_aa9a084093764796 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
            arg0.texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
        }, arguments) };
        imports.wbg.__wbg_texSubImage2D_c7951ed97252bdff = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
            arg0.texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
        }, arguments) };
        imports.wbg.__wbg_texSubImage2D_d52d1a0d3654c60b = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
            arg0.texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
        }, arguments) };
        imports.wbg.__wbg_texSubImage2D_dd9cac68ad5fe0b6 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
            arg0.texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
        }, arguments) };
        imports.wbg.__wbg_texSubImage2D_e6d34f5bb062e404 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
            arg0.texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
        }, arguments) };
        imports.wbg.__wbg_texSubImage2D_f39ea52a2d4bd2f7 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
            arg0.texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
        }, arguments) };
        imports.wbg.__wbg_texSubImage2D_fbdf91268228c757 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
            arg0.texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
        }, arguments) };
        imports.wbg.__wbg_texSubImage3D_04731251d7cecc83 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
            arg0.texSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10 >>> 0, arg11);
        }, arguments) };
        imports.wbg.__wbg_texSubImage3D_37f0045d16871670 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
            arg0.texSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10 >>> 0, arg11);
        }, arguments) };
        imports.wbg.__wbg_texSubImage3D_3a871f6405d2f183 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
            arg0.texSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10 >>> 0, arg11);
        }, arguments) };
        imports.wbg.__wbg_texSubImage3D_66acd67f56e3b214 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
            arg0.texSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10 >>> 0, arg11);
        }, arguments) };
        imports.wbg.__wbg_texSubImage3D_a051de089266fa1b = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
            arg0.texSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10 >>> 0, arg11);
        }, arguments) };
        imports.wbg.__wbg_texSubImage3D_b28c55f839bbec41 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
            arg0.texSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10 >>> 0, arg11);
        }, arguments) };
        imports.wbg.__wbg_texSubImage3D_f18bf091cd48774c = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
            arg0.texSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10 >>> 0, arg11);
        }, arguments) };
        imports.wbg.__wbg_then_44b73946d2fb3e7d = function(arg0, arg1) {
            const ret = arg0.then(arg1);
            return ret;
        };
        imports.wbg.__wbg_then_48b406749878a531 = function(arg0, arg1, arg2) {
            const ret = arg0.then(arg1, arg2);
            return ret;
        };
        imports.wbg.__wbg_top_ec9fceb1f030f2ea = function(arg0) {
            const ret = arg0.top;
            return ret;
        };
        imports.wbg.__wbg_touches_6831ee0099511603 = function(arg0) {
            const ret = arg0.touches;
            return ret;
        };
        imports.wbg.__wbg_type_00566e0d2e337e2e = function(arg0, arg1) {
            const ret = arg1.type;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        };
        imports.wbg.__wbg_type_20c7c49b2fbe0023 = function(arg0, arg1) {
            const ret = arg1.type;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        };
        imports.wbg.__wbg_uniform1f_21390b04609a9fa5 = function(arg0, arg1, arg2) {
            arg0.uniform1f(arg1, arg2);
        };
        imports.wbg.__wbg_uniform1f_dc009a0e7f7e5977 = function(arg0, arg1, arg2) {
            arg0.uniform1f(arg1, arg2);
        };
        imports.wbg.__wbg_uniform1i_5ddd9d8ccbd390bb = function(arg0, arg1, arg2) {
            arg0.uniform1i(arg1, arg2);
        };
        imports.wbg.__wbg_uniform1i_ed95b6129dce4d84 = function(arg0, arg1, arg2) {
            arg0.uniform1i(arg1, arg2);
        };
        imports.wbg.__wbg_uniform1ui_66e092b67a21c84d = function(arg0, arg1, arg2) {
            arg0.uniform1ui(arg1, arg2 >>> 0);
        };
        imports.wbg.__wbg_uniform2fv_656fce9525420996 = function(arg0, arg1, arg2, arg3) {
            arg0.uniform2fv(arg1, getArrayF32FromWasm0(arg2, arg3));
        };
        imports.wbg.__wbg_uniform2fv_d8bd2a36da7ce440 = function(arg0, arg1, arg2, arg3) {
            arg0.uniform2fv(arg1, getArrayF32FromWasm0(arg2, arg3));
        };
        imports.wbg.__wbg_uniform2iv_4d39fc5a26f03f55 = function(arg0, arg1, arg2, arg3) {
            arg0.uniform2iv(arg1, getArrayI32FromWasm0(arg2, arg3));
        };
        imports.wbg.__wbg_uniform2iv_e967139a28017a99 = function(arg0, arg1, arg2, arg3) {
            arg0.uniform2iv(arg1, getArrayI32FromWasm0(arg2, arg3));
        };
        imports.wbg.__wbg_uniform2uiv_4c340c9e8477bb07 = function(arg0, arg1, arg2, arg3) {
            arg0.uniform2uiv(arg1, getArrayU32FromWasm0(arg2, arg3));
        };
        imports.wbg.__wbg_uniform3fv_7d828b7c4c91138e = function(arg0, arg1, arg2, arg3) {
            arg0.uniform3fv(arg1, getArrayF32FromWasm0(arg2, arg3));
        };
        imports.wbg.__wbg_uniform3fv_8153c834ce667125 = function(arg0, arg1, arg2, arg3) {
            arg0.uniform3fv(arg1, getArrayF32FromWasm0(arg2, arg3));
        };
        imports.wbg.__wbg_uniform3iv_58662d914661aa10 = function(arg0, arg1, arg2, arg3) {
            arg0.uniform3iv(arg1, getArrayI32FromWasm0(arg2, arg3));
        };
        imports.wbg.__wbg_uniform3iv_f30d27ec224b4b24 = function(arg0, arg1, arg2, arg3) {
            arg0.uniform3iv(arg1, getArrayI32FromWasm0(arg2, arg3));
        };
        imports.wbg.__wbg_uniform3uiv_38673b825dc755f6 = function(arg0, arg1, arg2, arg3) {
            arg0.uniform3uiv(arg1, getArrayU32FromWasm0(arg2, arg3));
        };
        imports.wbg.__wbg_uniform4f_36b8f9be15064aa7 = function(arg0, arg1, arg2, arg3, arg4, arg5) {
            arg0.uniform4f(arg1, arg2, arg3, arg4, arg5);
        };
        imports.wbg.__wbg_uniform4f_f7ea07febf8b5108 = function(arg0, arg1, arg2, arg3, arg4, arg5) {
            arg0.uniform4f(arg1, arg2, arg3, arg4, arg5);
        };
        imports.wbg.__wbg_uniform4fv_8827081a7585145b = function(arg0, arg1, arg2, arg3) {
            arg0.uniform4fv(arg1, getArrayF32FromWasm0(arg2, arg3));
        };
        imports.wbg.__wbg_uniform4fv_c01fbc6c022abac3 = function(arg0, arg1, arg2, arg3) {
            arg0.uniform4fv(arg1, getArrayF32FromWasm0(arg2, arg3));
        };
        imports.wbg.__wbg_uniform4iv_7fe05be291899f06 = function(arg0, arg1, arg2, arg3) {
            arg0.uniform4iv(arg1, getArrayI32FromWasm0(arg2, arg3));
        };
        imports.wbg.__wbg_uniform4iv_84fdf80745e7ff26 = function(arg0, arg1, arg2, arg3) {
            arg0.uniform4iv(arg1, getArrayI32FromWasm0(arg2, arg3));
        };
        imports.wbg.__wbg_uniform4uiv_9de55998fbfef236 = function(arg0, arg1, arg2, arg3) {
            arg0.uniform4uiv(arg1, getArrayU32FromWasm0(arg2, arg3));
        };
        imports.wbg.__wbg_uniformBlockBinding_18117f4bda07115b = function(arg0, arg1, arg2, arg3) {
            arg0.uniformBlockBinding(arg1, arg2 >>> 0, arg3 >>> 0);
        };
        imports.wbg.__wbg_uniformMatrix2fv_98681e400347369c = function(arg0, arg1, arg2, arg3, arg4) {
            arg0.uniformMatrix2fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
        };
        imports.wbg.__wbg_uniformMatrix2fv_bc019eb4784a3b8c = function(arg0, arg1, arg2, arg3, arg4) {
            arg0.uniformMatrix2fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
        };
        imports.wbg.__wbg_uniformMatrix2x3fv_6421f8d6f7f4d144 = function(arg0, arg1, arg2, arg3, arg4) {
            arg0.uniformMatrix2x3fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
        };
        imports.wbg.__wbg_uniformMatrix2x4fv_27d807767d7aadc6 = function(arg0, arg1, arg2, arg3, arg4) {
            arg0.uniformMatrix2x4fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
        };
        imports.wbg.__wbg_uniformMatrix3fv_3d6ad3a1e0b0b5b6 = function(arg0, arg1, arg2, arg3, arg4) {
            arg0.uniformMatrix3fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
        };
        imports.wbg.__wbg_uniformMatrix3fv_3df529aab93cf902 = function(arg0, arg1, arg2, arg3, arg4) {
            arg0.uniformMatrix3fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
        };
        imports.wbg.__wbg_uniformMatrix3x2fv_79357317e9637d05 = function(arg0, arg1, arg2, arg3, arg4) {
            arg0.uniformMatrix3x2fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
        };
        imports.wbg.__wbg_uniformMatrix3x4fv_9d1a88b5abfbd64b = function(arg0, arg1, arg2, arg3, arg4) {
            arg0.uniformMatrix3x4fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
        };
        imports.wbg.__wbg_uniformMatrix4fv_da94083874f202ad = function(arg0, arg1, arg2, arg3, arg4) {
            arg0.uniformMatrix4fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
        };
        imports.wbg.__wbg_uniformMatrix4fv_e87383507ae75670 = function(arg0, arg1, arg2, arg3, arg4) {
            arg0.uniformMatrix4fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
        };
        imports.wbg.__wbg_uniformMatrix4x2fv_aa507d918a0b5a62 = function(arg0, arg1, arg2, arg3, arg4) {
            arg0.uniformMatrix4x2fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
        };
        imports.wbg.__wbg_uniformMatrix4x3fv_6712c7a3b4276fb4 = function(arg0, arg1, arg2, arg3, arg4) {
            arg0.uniformMatrix4x3fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
        };
        imports.wbg.__wbg_unmap_ab94ab04cfb14bee = function(arg0) {
            arg0.unmap();
        };
        imports.wbg.__wbg_url_ae10c34ca209681d = function(arg0, arg1) {
            const ret = arg1.url;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        };
        imports.wbg.__wbg_usage_6fec626a30cc0aff = function(arg0) {
            const ret = arg0.usage;
            return ret;
        };
        imports.wbg.__wbg_useProgram_473bf913989b6089 = function(arg0, arg1) {
            arg0.useProgram(arg1);
        };
        imports.wbg.__wbg_useProgram_9b2660f7bb210471 = function(arg0, arg1) {
            arg0.useProgram(arg1);
        };
        imports.wbg.__wbg_userAgent_12e9d8e62297563f = function() { return handleError(function (arg0, arg1) {
            const ret = arg1.userAgent;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments) };
        imports.wbg.__wbg_value_91cbf0dd3ab84c1e = function(arg0, arg1) {
            const ret = arg1.value;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        };
        imports.wbg.__wbg_value_cd1ffa7b1ab794f1 = function(arg0) {
            const ret = arg0.value;
            return ret;
        };
        imports.wbg.__wbg_vertexAttribDivisorANGLE_11e909d332960413 = function(arg0, arg1, arg2) {
            arg0.vertexAttribDivisorANGLE(arg1 >>> 0, arg2 >>> 0);
        };
        imports.wbg.__wbg_vertexAttribDivisor_4d361d77ffb6d3ff = function(arg0, arg1, arg2) {
            arg0.vertexAttribDivisor(arg1 >>> 0, arg2 >>> 0);
        };
        imports.wbg.__wbg_vertexAttribIPointer_d0c67543348c90ce = function(arg0, arg1, arg2, arg3, arg4, arg5) {
            arg0.vertexAttribIPointer(arg1 >>> 0, arg2, arg3 >>> 0, arg4, arg5);
        };
        imports.wbg.__wbg_vertexAttribPointer_550dc34903e3d1ea = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
            arg0.vertexAttribPointer(arg1 >>> 0, arg2, arg3 >>> 0, arg4 !== 0, arg5, arg6);
        };
        imports.wbg.__wbg_vertexAttribPointer_7a2a506cdbe3aebc = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
            arg0.vertexAttribPointer(arg1 >>> 0, arg2, arg3 >>> 0, arg4 !== 0, arg5, arg6);
        };
        imports.wbg.__wbg_viewport_a1b4d71297ba89af = function(arg0, arg1, arg2, arg3, arg4) {
            arg0.viewport(arg1, arg2, arg3, arg4);
        };
        imports.wbg.__wbg_viewport_e615e98f676f2d39 = function(arg0, arg1, arg2, arg3, arg4) {
            arg0.viewport(arg1, arg2, arg3, arg4);
        };
        imports.wbg.__wbg_warn_11b4e4f7bff9ffb7 = function(arg0, arg1) {
            console.warn(getStringFromWasm0(arg0, arg1));
        };
        imports.wbg.__wbg_width_5dde457d606ba683 = function(arg0) {
            const ret = arg0.width;
            return ret;
        };
        imports.wbg.__wbg_width_cdaf02311c1621d1 = function(arg0) {
            const ret = arg0.width;
            return ret;
        };
        imports.wbg.__wbg_writeBuffer_b203cf79b98d6dd8 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
            arg0.writeBuffer(arg1, arg2, arg3, arg4, arg5);
        }, arguments) };
        imports.wbg.__wbg_writeText_51c338e8ae4b85b9 = function(arg0, arg1, arg2) {
            const ret = arg0.writeText(getStringFromWasm0(arg1, arg2));
            return ret;
        };
        imports.wbg.__wbg_writeTexture_0466bf7d7d35e04e = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.writeTexture(arg1, arg2, arg3, arg4);
        }, arguments) };
        imports.wbg.__wbg_write_e357400b06c0ccf5 = function(arg0, arg1) {
            const ret = arg0.write(arg1);
            return ret;
        };
        imports.wbg.__wbindgen_boolean_get = function(arg0) {
            const v = arg0;
            const ret = typeof(v) === 'boolean' ? (v ? 1 : 0) : 2;
            return ret;
        };
        imports.wbg.__wbindgen_cb_drop = function(arg0) {
            const obj = arg0.original;
            if (obj.cnt-- == 1) {
                obj.a = 0;
                return true;
            }
            const ret = false;
            return ret;
        };
        imports.wbg.__wbindgen_closure_wrapper4806 = function(arg0, arg1, arg2) {
            const ret = makeMutClosure(arg0, arg1, 1315, __wbg_adapter_36);
            return ret;
        };
        imports.wbg.__wbindgen_closure_wrapper4808 = function(arg0, arg1, arg2) {
            const ret = makeMutClosure(arg0, arg1, 1315, __wbg_adapter_39);
            return ret;
        };
        imports.wbg.__wbindgen_closure_wrapper4810 = function(arg0, arg1, arg2) {
            const ret = makeMutClosure(arg0, arg1, 1315, __wbg_adapter_36);
            return ret;
        };
        imports.wbg.__wbindgen_closure_wrapper6806 = function(arg0, arg1, arg2) {
            const ret = makeMutClosure(arg0, arg1, 2260, __wbg_adapter_44);
            return ret;
        };
        imports.wbg.__wbindgen_debug_string = function(arg0, arg1) {
            const ret = debugString(arg1);
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        };
        imports.wbg.__wbindgen_in = function(arg0, arg1) {
            const ret = arg0 in arg1;
            return ret;
        };
        imports.wbg.__wbindgen_init_externref_table = function() {
            const table = wasm.__wbindgen_export_1;
            const offset = table.grow(4);
            table.set(0, undefined);
            table.set(offset + 0, undefined);
            table.set(offset + 1, null);
            table.set(offset + 2, true);
            table.set(offset + 3, false);
            ;
        };
        imports.wbg.__wbindgen_is_function = function(arg0) {
            const ret = typeof(arg0) === 'function';
            return ret;
        };
        imports.wbg.__wbindgen_is_null = function(arg0) {
            const ret = arg0 === null;
            return ret;
        };
        imports.wbg.__wbindgen_is_object = function(arg0) {
            const val = arg0;
            const ret = typeof(val) === 'object' && val !== null;
            return ret;
        };
        imports.wbg.__wbindgen_is_undefined = function(arg0) {
            const ret = arg0 === undefined;
            return ret;
        };
        imports.wbg.__wbindgen_memory = function() {
            const ret = wasm.memory;
            return ret;
        };
        imports.wbg.__wbindgen_number_get = function(arg0, arg1) {
            const obj = arg1;
            const ret = typeof(obj) === 'number' ? obj : undefined;
            getDataViewMemory0().setFloat64(arg0 + 8 * 1, isLikeNone(ret) ? 0 : ret, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
        };
        imports.wbg.__wbindgen_number_new = function(arg0) {
            const ret = arg0;
            return ret;
        };
        imports.wbg.__wbindgen_string_get = function(arg0, arg1) {
            const obj = arg1;
            const ret = typeof(obj) === 'string' ? obj : undefined;
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        };
        imports.wbg.__wbindgen_string_new = function(arg0, arg1) {
            const ret = getStringFromWasm0(arg0, arg1);
            return ret;
        };
        imports.wbg.__wbindgen_throw = function(arg0, arg1) {
            throw new Error(getStringFromWasm0(arg0, arg1));
        };

        return imports;
    }

    function __wbg_init_memory(imports, memory) {

    }

    function __wbg_finalize_init(instance, module) {
        wasm = instance.exports;
        __wbg_init.__wbindgen_wasm_module = module;
        cachedDataViewMemory0 = null;
        cachedFloat32ArrayMemory0 = null;
        cachedInt32ArrayMemory0 = null;
        cachedUint32ArrayMemory0 = null;
        cachedUint8ArrayMemory0 = null;


        wasm.__wbindgen_start();
        return wasm;
    }

    function initSync(module) {
        if (wasm !== undefined) return wasm;


        if (typeof module !== 'undefined') {
            if (Object.getPrototypeOf(module) === Object.prototype) {
                ({module} = module)
            } else {
                console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
            }
        }

        const imports = __wbg_get_imports();

        __wbg_init_memory(imports);

        if (!(module instanceof WebAssembly.Module)) {
            module = new WebAssembly.Module(module);
        }

        const instance = new WebAssembly.Instance(module, imports);

        return __wbg_finalize_init(instance, module);
    }

    async function __wbg_init(module_or_path) {
        if (wasm !== undefined) return wasm;


        if (typeof module_or_path !== 'undefined') {
            if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
                ({module_or_path} = module_or_path)
            } else {
                console.warn('using deprecated parameters for the initialization function; pass a single object instead')
            }
        }

        if (typeof module_or_path === 'undefined' && typeof script_src !== 'undefined') {
            module_or_path = script_src.replace(/\.js$/, '_bg.wasm');
        }
        const imports = __wbg_get_imports();

        if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
            module_or_path = fetch(module_or_path);
        }

        __wbg_init_memory(imports);

        const { instance, module } = await __wbg_load(await module_or_path, imports);

        return __wbg_finalize_init(instance, module);
    }

    wasm_bindgen = Object.assign(__wbg_init, { initSync }, __exports);

})();
