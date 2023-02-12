# mycrypto1

## Authors

- stacksparrow4

## Category

- crypto

## Description

(This challenge does not have `OWEEK{}` around the flag. Just submit the decoded message)

Right, so you figured out my last message. So I had to add a bit of extra
✨ security ✨ to keep them safe. What I did is pretty smart, I changed
the KEY forward in the alphabet one character after each letter (and underscore,
although underscore does not change when going through this cipher). This way
it's impossible to crack.

So here's my next message:

`ebvsly_oqmo_ucnmsm_uh_dqpftjj_b_xwkr_sucqh_oa_jxjybft`

## Difficulty

- Easy

## Points

50

## Solution

<details>
<summary>Spoiler</summary>

### Idea

The key for the caesar cipher now changes on a per character basis.

### Walkthrough

If you know how to code, you can simply code a brute forcer for this challenge.
Otherwise, here's a way to do it without code:

1. Copy the text into the ROT13 bruteforce operation in [CyberChef](https://gchq.github.io/CyberChef/)
   You should get the following output.

   ```
   Amount =  1: fcwtmz_prnp_vdontn_vi_erqgukk_c_yxls_tvdri_pb_kykzcgu
   Amount =  2: gdxuna_qsoq_wepouo_wj_fsrhvll_d_zymt_uwesj_qc_lzladhv
   Amount =  3: heyvob_rtpr_xfqpvp_xk_gtsiwmm_e_aznu_vxftk_rd_mambeiw
   Amount =  4: ifzwpc_suqs_ygrqwq_yl_hutjxnn_f_baov_wygul_se_nbncfjx
   Amount =  5: jgaxqd_tvrt_zhsrxr_zm_ivukyoo_g_cbpw_xzhvm_tf_ocodgky
   Amount =  6: khbyre_uwsu_aitsys_an_jwvlzpp_h_dcqx_yaiwn_ug_pdpehlz
   Amount =  7: liczsf_vxtv_bjutzt_bo_kxwmaqq_i_edry_zbjxo_vh_qeqfima
   Amount =  8: mjdatg_wyuw_ckvuau_cp_lyxnbrr_j_fesz_ackyp_wi_rfrgjnb
   Amount =  9: nkebuh_xzvx_dlwvbv_dq_mzyocss_k_gfta_bdlzq_xj_sgshkoc
   Amount = 10: olfcvi_yawy_emxwcw_er_nazpdtt_l_hgub_cemar_yk_thtilpd
   Amount = 11: pmgdwj_zbxz_fnyxdx_fs_obaqeuu_m_ihvc_dfnbs_zl_uiujmqe
   Amount = 12: qnhexk_acya_gozyey_gt_pcbrfvv_n_jiwd_egoct_am_vjvknrf
   Amount = 13: roifyl_bdzb_hpazfz_hu_qdcsgww_o_kjxe_fhpdu_bn_wkwlosg
   Amount = 14: spjgzm_ceac_iqbaga_iv_redthxx_p_lkyf_giqev_co_xlxmpth
   Amount = 15: tqkhan_dfbd_jrcbhb_jw_sfeuiyy_q_mlzg_hjrfw_dp_ymynqui
   Amount = 16: urlibo_egce_ksdcic_kx_tgfvjzz_r_nmah_iksgx_eq_znzorvj
   Amount = 17: vsmjcp_fhdf_ltedjd_ly_uhgwkaa_s_onbi_jlthy_fr_aoapswk
   Amount = 18: wtnkdq_gieg_mufeke_mz_vihxlbb_t_pocj_kmuiz_gs_bpbqtxl
   Amount = 19: xuoler_hjfh_nvgflf_na_wjiymcc_u_qpdk_lnvja_ht_cqcruym
   Amount = 20: yvpmfs_ikgi_owhgmg_ob_xkjzndd_v_rqel_mowkb_iu_drdsvzn
   Amount = 21: zwqngt_jlhj_pxihnh_pc_ylkaoee_w_srfm_npxlc_jv_esetwao
   Amount = 22: axrohu_kmik_qyjioi_qd_zmlbpff_x_tsgn_oqymd_kw_ftfuxbp
   Amount = 23: byspiv_lnjl_rzkjpj_re_anmcqgg_y_utho_przne_lx_gugvycq
   Amount = 24: cztqjw_mokm_salkqk_sf_bondrhh_z_vuip_qsaof_my_hvhwzdr
   Amount = 25: daurkx_npln_tbmlrl_tg_cpoesii_a_wvjq_rtbpg_nz_iwixaes
   ```

1. Note that there is a single character world in the output. The only options
   for this are "a" or "i".
1. As the key increases each time, we need to counteract this by decreasing
   the key we are using as we read to the right. This means reading diagonally
   up and to the right. (Note: we need to include underscores)
1. Reading up and to the right from a gives `a_usfl_...` which doesn't make any
   sense.
1. Doing the same for i gives `i_cant_t` where we then wrap around to the bottom
   and can keep decoding. We can also go down and to the left to decode before
   the i. Continuing to do this gives us the flag.

### Flag

`please_stop_taking_my_secrets_i_cant_stand_it_anymore`

</details>
